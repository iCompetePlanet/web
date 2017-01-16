import {Injectable} from '@angular/core';

declare var Cookies: any;

@Injectable()
export class UserPreferencesService {
  private static readonly PREFS_KEY: string = 'user-preferences';
  cookies: any = Cookies; // Cookies is a global scope object

  getPref(pref: string): any {
    console.log('Preferences is: ', this.getPreferences());
    return this.getPreferences()[pref];
  }

  setPref(pref: string, value: any): void {
    const prefs = this.getPreferences();
    prefs[pref] = value;
    console.log('Setting preferences: ', prefs);
    this.cookies.set(UserPreferencesService.PREFS_KEY, prefs, { expires: 30 });
  }

  private getPreferences(): any {
    return this.cookies.getJSON(UserPreferencesService.PREFS_KEY) || {};
  }
}
