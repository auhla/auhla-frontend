import { AbstractControl } from '@angular/forms';

export class RutValidator {

  static isRutValid(control: AbstractControl) {
    if (control.value) {
      let value: string = control.value.split('.').join('');
      value = value.replace('-', '');

      const rut = value.slice(0, -1);
      let dv = value.slice(-1).toUpperCase();
      let suma = 0;
      let multiplo = 2;
      let index = 0;

      for (let i = 1 ; i <= rut.length ; i++) {
        index = multiplo * Number(value.charAt(rut.length - i));
        suma = suma + index;

        if (multiplo < 7) {
          multiplo++;
        } else {
          multiplo = 2;
        }
      }

      const dvCorrecto: number = 11 - (suma % 11);

      dv = (dv === 'K') ? '10' : dv;
      dv = (dv === '0') ? '11' : dv;

      if (dv === dvCorrecto.toString()) {
        return null;
      } else {
        return { rut_invalid: true };
      }
    }

    return null;
  }
}
