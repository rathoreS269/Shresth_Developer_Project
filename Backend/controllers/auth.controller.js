import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer';
import { validationResult } from 'express-validator';


export const signup = async(req, res) =>{
    const {username , email, password} = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({username, email, password: hashedPassword});
    try {
        await newUser.save()
        res.status(201).json('user created successfully');
    } catch (error) {
        res.status(500).json(error.message)
    }
      
    };

    export const signin = async (req, res, next) => {
        const { email, password } = req.body;
        try {
          const validUser = await User.findOne({ email });
          if (!validUser) return next(errorHandler(404, 'User not found!'));
          const validPassword = bcryptjs.compareSync(password, validUser.password);
          if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
          const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET)
          const { password: pass, ...rest } = validUser._doc;
          res
          .cookie('access_token', token, { httpOnly: true })
          .status(200)
          .json(rest);
        }
        catch (error) {
            next(error);
          }
    };

    export const google = async(req, res, next) =>{
        try {
            const user = await User.findOne({email:req.body.email})
            if(user){
                const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
                const {password:  pass, ...rest} = user._doc;
                res
                .cookie('access_token',token,  {httpOnly: true} )
                .status(200)
                .json(rest);
            }
            else{
                const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
                const hashedPassword = bcryptjs.hashSync(generatedPassword,10);

                const newUser = new User({ username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4) , email: req.body.email, password: hashedPassword, avatar: req.body.photo });
                await newUser.save();
                const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
                const {password:  pass, ...rest} = newUser._doc;
                res
                .cookie('access_token',token,  {httpOnly: true} )
                .status(200)
                .json(rest);
            }
        } catch (error) {
            next(error)
        }
    };

    export const signOut = async (req, res, next) => {
        try {
          res.clearCookie('access_token');
          res.status(200).json('User has been logged out!');
        } catch (error) {
          next(error);
        }
      };

    // Forgot Password
    export const forgotPassword = async (req, res, next) => {
    const { email } = req.body;
    //console.log(email);
    try{
        const user = await User.findOne({ email });
        if (!user) return next(errorHandler(404, 'User not found!'));
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
             });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "120s" });
        //console.log('token',token)
        const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`;
        //console.log(resetLink)
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset Request',
            text: `You requested a password . Click the link to reset your password: ${resetLink}`,
            html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
          };
          await transporter.sendMail(mailOptions);
          res.status(200).json('Password reset email sent!');
      
    }catch (error) { 
        next(error);
      } 
   
  };
  // reset password
  
  export const resetPassword = async (req, res, next) => {
    const { token } = req.params;
    const { newPassword } = req.body;
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      const user = await User.findById(decoded.id);
      if (!user) return next(errorHandler(404, 'User not found!'));
  
      const hashedPassword = bcryptjs.hashSync(newPassword, 10);
      user.password = hashedPassword;
  
      await user.save();
      res.status(200).json('Password has been updated!');
    } catch (error) {
      next(error);
    }
  };
  