/*
First of all , we need to install the dependency(module) of express by writing npm install express
or npm install express --save

When you do this:
var express = require('express');

The express module returns to you a factory function. A factory function is a regular function that you call like a regular function and when you call it, it creates and returns an object.

var app=express();
here app is an express object. with the help of express object(app, which we create here), we can access all the functionality of express.

If we write var app, then in that case, the value of app can be changed, but if we want that the value of app cannot be changed, then in that case we use const app. 

[ IMPORTANT ]
A Factory Function is just a Function that creates something. It is usually an Object, but it can be anything, a String, an Array, or even another Function.

It's not a constructor directly (which is why you don't use new on it). That was a design choice by the creators of the Express library.

*/
// For Programs please refer folder 2 Express_Programs
