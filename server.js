var express = require("express");
var orm = require("./config/orm.js");

orm.selectAll("burgers");

orm.insertOne("burgers, burger_name, null");

orm.updateOne("burgers, burger_name, id");