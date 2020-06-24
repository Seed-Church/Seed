const expectStringEnglish = (str) => /^[A-Za-z]+$/i.test(str);
const expectStringEnglishWithNumber = (str) => /^[A-Za-z0-9]+$/i.test(str);
const expectStringEnglishWithNumberWithSpecial = (str) => /^[A-Za-z0-9_.-/]+$/i.test(str);
const expectStringThai = (str) => /^[ก-ฮ]+$/i.test(str);
const expectStringThaiWithNumber = (str) => /^[ก-ฮ0-9]+$/i.test(str);
const expectStringThaiWithNumberWithSpecial  = (str) => /^[ก-ฮ0-9_.-/]+$/i.test(str);
const expectStringEngORThaiWithNumber = (str) => /^[A-Za-z0-9ก-ฮ]+$/i.test(str);
