import {Injectable} from '@angular/core';

@Injectable()
export class UserPreferencesService {
  private static readonly PREFS_KEY: string = 'user-preferences';

  getPref(pref: string): any {
    console.log('Preferences is: ', this.getPreferences());
    return this.getPreferences()[pref];
  }

  setPref(pref: string, value: any): void {
    const prefs = this.getPreferences();
    prefs[pref] = value;
    console.log('Setting preferences: ', prefs);
    localStorage.setItem(UserPreferencesService.PREFS_KEY, JSON.stringify(prefs))
  }

  private getPreferences(): any {
    const prefs = localStorage.getItem(UserPreferencesService.PREFS_KEY);
    return prefs ? JSON.parse(prefs) : {};
  }
}
