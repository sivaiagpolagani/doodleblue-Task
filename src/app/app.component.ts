import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForm';
  editUserIndex = undefined;
  users = [];
  userView: any = {};
  userEdit = {};
  shortName: string;
  dataretrive(i) {
    this.editUserIndex = i;
    this.userView = this.users[i];
    let shortName: any = (this.userView.name as string).split(' ');
    let userShortName = '';

    for (const val of shortName) {
      userShortName += val.charAt(0);
    }

    this.shortName = userShortName.toUpperCase();

    Object.assign(this.userEdit, this.userView);
  }
  onSubmit(uname, jmail, company, address, phone) {
    this.users.push({
      name: uname.value,
      mail: jmail.value,
      companyn: company.value,
      addr: address.value,
      ph: phone.value,
    });

  }

  onEdit() {
    this.users[this.editUserIndex] = this.userEdit;
  }
}
