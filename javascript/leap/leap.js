export const isLeap = _year => !(_year % 4) && ((!(_year % 100) && !(_year % 400)) || _year % 100);
