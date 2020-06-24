import moment from "moment";
export const expectFakeValue = {
  defaultValues: {
    firstName: "อามมี่",
    nickName: "อามมี่",
    lastName: "อามมี่",
    Age: 15,
    Tel: "0123456789",
    Facebook: "facebook/INWnpy",
    Ability: "ไข่ขาว",
    Address: "อยู่ในรู",
    Mentor: 1,
    Group: 1,
    Status: 1,
    Position: "คนขายม้า",
    Salary: 50000,
    Where: "ที่บ้านที่บ้านที่บ้านที่บ้าน",
    dateBelieve: moment(new Date()).toDate(),
  },
};

export const  UnExpectFakeValue = {
  defaultValues: {
    firstName: "English01",
    nickName: "English01_.-/@",
    lastName: "English01_.-/@",
    Age: 2,
    Tel: "0String",
    Facebook: "ไทย/INWnpyEnglish01_.-/@",
    Ability: "English01_.-/@",
    Address: "English01_.-/@",
    Mentor: 1,
    Group: 1,
    Status: 1,
    Position: "English01_.-/@",
    Salary:3000,
    Where: "English01_.-/@",
    dateBelieve: moment(new Date()).toDate(),
  },
};

const expectStringEnglish = () => /^[A-Za-z]+$/i;
const expectStringEnglishWithNumber = () => /^[A-Za-z0-9]+$/i;
const expectStringEnglishWithNumberWithSpecial = (str) => /^[A-Za-z0-9_.-/@]+$/i;
const expectStringThai = () => /^[ก-๙]+$/i;
const expectStringThaiWithNumber = () => /^[ก-๙0-9]+$/i;
const expectStringThaiWithNumberWithSpecial  = (str) => /^[ก-๙0-9_.-/@]+$/i;
const expectStringEngORThaiWithNumber = () => /^[A-Za-z0-9ก-๙]+$/i;

export const patternName = {
  required: "ห้ามเป็นค่าว่าง",
  maxLength: { value: 25, message: "ไม่เกิน 25 ตัวอักษร" },
  pattern: {
    value: expectStringThai(),
    message: "ภาษาไทยเท่านั้น",
  },
};

export const patternAge = {
  required: "ห้ามเป็นค่าว่าง",
  min: {
    value: 5,
    message: "อายุขั้นต่ำ 5",
  },
  max: {
    value: 99,
    message: "อายุมากสุด 99",
  },
};

export const patternFacebook = {
  maxLength: { value: 25, message: "ไม่เกิน 25 ตัวอักษร" },
  pattern: {
    value: expectStringEnglishWithNumberWithSpecial(),
    message: "ภาษาอังกฤษ ตัวเลข และ ./_@ เท่านั้น",
  },
};

export const patternTel = {
  pattern: {
    value: /^[0-9]{10}$/i,
    message: "ตัวเลข 10 ตัวเท่านั้น",
  },
};

export const patternAddress = {
  maxLength: { value: 50, message: "ไม่เกิน 50 ตัวอักษร" },
  pattern: {
    value: expectStringThaiWithNumberWithSpecial(),
    message: "ภาษาไทยและ ./_@ เท่านั้น",
  },
};

export const patternAbility = {
  maxLength: { value: 25, message: "ไม่เกิน 25 ตัวอักษร" },
  pattern: {
    value: expectStringThai,
    message: "ภาษาไทยเท่านั้น",
  },
};


export const patternSelect = {
  maxLength: { value: 25, message: "ไม่เกิน 25 ตัวอักษร" },
  required: "ห้ามเป็นค่าว่าง",
};


export const patternSalary = {
  min: {
    value: 100,
    message: "เงินเดือนขั้นต่ำสุดคือ 100",
  },
  pattern: {
    value:/^\d{1,6}$/i,
    message: "ตัวเลขเท่านั้น",
  },
};


export const patternFile = {};

