export function hightlight(el: any, zone: any, className = 'checked') {
  zone.runOutsideAngular(() => {
    const a = el.nativeElement.querySelector('a');
    a.classList.add(className);
    setTimeout(() => {
      a.classList.remove(className);
    }, 500);
  });
}


export function hightlightDiv(el: any, zone: any, className = 'checked') {
  zone.runOutsideAngular(() => {
    const a = el.nativeElement.querySelector('div.comp');
    a.classList.add(className);
    setTimeout(() => {
      a.classList.remove(className);
    }, 500);
  });
}
