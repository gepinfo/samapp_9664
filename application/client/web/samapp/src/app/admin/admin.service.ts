import { Observable } from 'rxjs';
import axios from 'axios'
import React from 'react';

export class AdminService {

  Getallusers() {
    axios.get('http://'+window.location.hostname+':8000/desktop' + '/admin/getusers');
  }
}