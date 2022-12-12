/**
 * @param value 유저가 입력하는 숫자 (string)
 * @param decimalPlace 소숫점 자리수 최대값 (number)
 * @returns 천자리 콤마가 추가되며 소숫점 자릿수까지 제한하는 숫자 (string)
 */
const addThousandSeparator = (value: string, decimalPlace: number) => {
  if (value.includes(".")) {
    const integer = value.split(".")[0];
    const decimal = value.split(".")[1];
    let output = integer.replace(/,/g, "");
    decimal;
    if (Number.isNaN(output)) {
      return 0;
    }
    if (decimal.length > decimalPlace) {
      return integer + "." + decimal.slice(0, decimalPlace);
    }
    const integerWithComma = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return integerWithComma + "." + decimal;
  } else {
    let output = value.replace(/,/g, "");
    if (Number.isNaN(output)) {
      return 0;
    }
    const commaReplaced = output.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return commaReplaced;
  }
};
