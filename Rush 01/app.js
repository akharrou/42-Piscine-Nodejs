/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 10:31:05 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 23:11:18 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Application Dependencies
// ===============================================================================

/* Import Application Dependencies */
var path = require('path');
var express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

/* Create/Import Routes */
var userRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');


// Initialize Application Server
// ===============================================================================
var app = express();


// Add MiddleWare
// ===============================================================================

// Set Path to Static HTML Pages
app.use(express.static(path.join(__dirname, 'public/html/')));

// Request Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use 'express-session' to Automatically Create Cookies
var sess_options = {
	secret: 'whippersnapper' + Math.floor((Math.random() * 1000000000000) + 1),
	cookie: { maxAge: 60000 }
};
app.use(session(sess_options));

// Set Created Routes
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);


// Export
// ===============================================================================

module.exports = app;

