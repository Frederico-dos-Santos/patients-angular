import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, name: string, age?: number): any {

    let filtro = Object.values(value)
    return filtro.filter((v: any) => {
      if (v?.nome.toString().toLowerCase().trim().indexOf(name.toLowerCase().trim()) != -1) {
        return true;
      }else{
        return false;
      }
    }
    )
  }
}
