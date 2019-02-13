module.exports = {
    isEmail: function (email) {
        var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (re.test(email)) {
            return true;
        } else {
            return false;
        }
    },
    isMobileNumber: function (mobile) {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (re.test(mobile)) {
            return true;
        } else {
            return false;
        }
    },
    isVisaCard: function (card) {
        var re = /^4[0-9]{12}(?:[0-9]{3})?$/;
        if (re.test(card)) {
            return true;
        } else {
            return false;
        }
    },
    isMasterCard: function (card) {
        var re = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
        if (re.test(card)) {
            return true;
        } else {
            return false;
        }
    },
    isAmericanExpressCard: function (card) {
        var re = /^3[47][0-9]{13}$/;
        if (re.test(card)) {
            return true;
        } else {
            return false;
        }
    },
    isDinersClubCard: function (card) {
        var re = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
        if (re.test(card)) {
            return true;
        } else {
            return false;
        }
    },
    isDiscoverCard: function (card) {
        var re = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
        if (re.test(card)) {
            return true;
        } else {
            return false;
        }
    },
    isJCBCard: function (card) {
        var re = /^(?:2131|1800|35\d{3})\d{11}$/;
        if (re.test(card)) {
            return true;
        } else {
            return false;
        }
    },
    isCardNumber: function (card) {
        var reMaster = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
        var reVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
        var reAmericanExpress = /^3[47][0-9]{13}$/;
        var reDinersClub = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
        var reDiscover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
        var reJCB = /^(?:2131|1800|35\d{3})\d{11}$/;

        if (reMaster.test(card) || reVisa.test(card) || reAmericanExpress.test(card) || reDinersClub.test(card) || reDiscover.test(card) || reJCB.test(card)) {
            return true;
        } else {
            return false;
        }
    },
    isStrongPassword: function (password) {
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if (re.test(password)) {
            return true;
        } else {
            return false;
        }
    },
    isMediumStrengthPassword: function (password) {
        var re = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
        if (re.test(password)) {
            return true;
        } else {
            return false;
        }
    },
    isPortNumber: function (port) {
        var re = /^([1-9][0-9]{0,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;
        if (re.test(port)) {
            return true;
        } else {
            return false;
        }
    },
    isHexColorCode: function (code) {
        var re = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (re.test(code)) {
            return true;
        } else {
            return false;
        }
    },
    isValidUrl: function (url) {
        var re = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
        if (re.test(url)) {
            return true;
        } else {
            return false;
        }
    },
    isMacAddress: function (macAddress) {
        var re = /^(?:[[:xdigit:]]{2}([-:]))(?:[[:xdigit:]]{2}\1){4}[[:xdigit:]]{2}$/;
        if (re.test(macAddress)) {
            return true;
        } else {
            return false;
        }
    },
    isInternationalPassportNumber: function (passport) {
        var re = /^[A-Z0-9<]{9}[0-9]{1}[A-Z]{3}[0-9]{7}[A-Z]{1}[0-9]{7}[A-Z0-9<]{14}[0-9]{2}$/;
        if (re.test(passport)) {
            return true;
        } else {
            return false;
        }
    },
    isIMEINumber: function (number) {
        if (typeof (number) === 'number') {
            
            if (number.toString().length !== 15){
                console.log("Length");
                return false;
            }
            else {
                var sum = 0;
                for (let index = number.toString().length; index >= 1; index--) {
                    var d = number % 10;
                    if (index % 2 === 0)
                        d = 2 * d;
                    console.log(d);
                    sum += sumOfDigit(d);
                    number = Math.floor(number / 10);
                }
                console.log(sum);
                return (sum%10 === 0);
            }
        } else {
            console.log("Type");
            return false;
        }
        function sumOfDigit(num) {
            var a = 0;
            while (num > 0) {
                a = a + num % 10;
                num = Math.floor(num / 10);
            }
            return a;
        }
    },
    isUUIDv4: function(uuid){
        var re = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/;
        if(re.test(uuid)){
            return true;
        }else{
            return false;
        }
    }
}


//isMobileNumber

//(123) 456-7890
//(123)456-7890
//123-456-7890
//123.456.7890
//1234567890
//+31636363634
//075-63546725

//Medium password

//The expression is nearly the same as the strong condition, except this time we’re including an or condition. We essentially want to label a password as having medium strength if it contains six characters or more and has at least one lowercase and one uppercase alphabetical character or has at least one lowercase and one numeric character or has at least one uppercase and one numeric character. We’ve chosen to leave special characters out of this one.

