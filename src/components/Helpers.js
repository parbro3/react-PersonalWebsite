import React, { Component } from 'react';

export function multiplyText(i, text) {
  var start;
  var returnString = text;
  for (start = 0; start < i; start++) {
      returnString = returnString + text;
  }
  return returnString;
}
