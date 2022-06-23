module.exports = function toReadable (number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  if (number === 0) {
    return 'zero';
  } else if ((number > 0) && (number < 20)) {
    return units[(number)];
  } else if ((number > 19) && (number < 100) && ((Number((String(number)).slice(1))) > 0)) {
    return dozens[Number(String(number)[0]) - 2] + ' ' +  units[Number(String(number)[1])];
  } else if ((number > 19) && (number < 100) && ((Number((String(number)).slice(1))) === 0)) {
    return dozens[Number(String(number)[0]) - 2];
  }
    else if ((number >= 100) && (number <= 999) && ((Number((String(number)).slice(1))) < 20) && ((Number((String(number)).slice(1))) > 0)) {
    return hundreds[Number(String(number)[0])] + ' ' + units[((Number((String(number)).slice(1))))];
  } else if ((number >= 100) && (number <= 999) && ((Number((String(number)).slice(1))) < 20) && ((Number((String(number)).slice(1))) === 0)) {
    return hundreds[Number(String(number)[0])];
  }
    else if ((number >= 100) && (number <= 999) && ((Number((String(number)).slice(1))) >= 20) && ((Number((String(number)).slice(2))) > 0)) {
    return hundreds[Number(String(number)[0])] + ' ' + dozens[Number(String(number)[1]) - 2] + ' ' +  units[Number(String(number)[2])];
  } else if ((number >= 100) && (number <= 999) && ((Number((String(number)).slice(1))) >= 20) && ((Number((String(number)).slice(2))) === 0)) {
    return hundreds[Number(String(number)[0])] + ' ' + dozens[Number(String(number)[1]) - 2];
  }
}

