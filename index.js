export const toRoman = (num) => {
  let uni = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
  let dec = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
  let cen = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
  let mil = ['','M','MM','MMM'];
  
    switch (`${num}`.length) {
        case 4:
            return mil[`${num}`[0]]
                + cen[`${num}`[1]]
                + dec[`${num}`[2]]
                + uni[`${num}`[3]]
        case 3:
            return cen[`${num}`[0]]
                + dec[`${num}`[1]]
                + uni[`${num}`[2]]
        case 2:
            return dec[`${num}`[0]]
                + uni[`${num}`[1]]
        case 1:
            return uni[`${num}`[0]]
        default:
            break;
    }
};
