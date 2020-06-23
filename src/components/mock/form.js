import moment from "moment";
export const fakeValue = {
  defaultValues: {
    firstName: "ไทยไทย",
    nickName: "หอย",
    lastName: "บ้า",
    Age: 15,
    Tel: "095801444",
    Facebook: "facebook/inwza",
    Ability: "ว่ายน้ำ",
    Address: "วัง",
    Mentor: 1,
    Group: 1,
    Status: 1,
    Position: "คนขายม้า",
    Salary: 1500000,
    Where: "ที่บ้าน",
    dateBelieve: moment(new Date()).toDate(),
  },
};

export const patternName = {
  required: "ห้ามเป็นค่าว่าง",
  maxLength: { value: 25, message: "ไม่เกิน 25 ตัวอักษร" },
  pattern: {
    value: /^[ก-๙]+$/i,
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
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "ภาษาอังกฤษ ตัวเลข อักขระ เท่านั้น",
  },
};

export const patternTel = {
  maxLength: { value: 25, message: "ไม่เกิน 25 ตัวอักษร" },
  pattern: {
    value: /^[0-9]{10}$/i,
    message: "ภาษาอังกฤษ ตัวเลข อักขระ เท่านั้น",
  },
};
