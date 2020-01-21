/**
 * WEB222 – Assignment 02
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Lien Tran
 *      Student ID: 163733173
 *      Date: October 12,2019
 *
 * Follow all instructions in README.md
 */

/**
 * The utils Object has methods for working with individual user data, in
 * order to format or generate new user information.
 */
const utils = {
    /**
     * Takes a phone number in the form "##########" and returns it in the
     * form "(###) ###-####".
     *
     * @param {String} phoneNumber
     */
    formatPhoneNumber: function(phoneNumber) {
        return (
            '(' +
            phoneNumber.substr(0, 3) +
            ') ' +
            phoneNumber.substr(3, 3) +
            '-' +
            phoneNumber.substr(6, 4)
        );
    },

    /**
     * Uses the given firstName and lastName strings to create a username, which
     * takes the form: first two letters of first name followed by at most 4 letters
     * of the last name.  For example:
     *
     * "John Smithson" -> "josmit"
     * "Dan Min" -> "damin"
     *
     * The generated username should be in UPPERCASE.
     *
     * @param {String} firstName
     * @param {String} lastName
     */
    generateUsername: function(firstName, lastName) {
        return (firstName.slice(0, 2) + lastName.slice(0, 4)).toUpperCase();
    },

    /**
     * Generates a Google Maps URL for the given address, city, and country
     * values.  See the docs for how to format these URLs at:
     *
     * https://developers.google.com/maps/documentation/urls/guide#modes
     * and https://developers.google.com/maps/documentation/urls/url-encoding
     *
     * For example.  Given "City Hall", "New York", and "USA", combine
     * the address, city, and country values with a spaces between each, (i.e.,
     * 'City Hall New York USA'), encode for inclusion on a URL, and return:
     *
     * https://www.google.com/maps/search/?api=1&query=City%20Hall%2C%20New%20York%2C%20USA
     *
     * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
     *
     * @param {String} address
     * @param {String} city
     * @param {String} country
     */
    generateGoogleMapsURL: function(address, city, country) {
        return (
            'https://www.google.com/maps/search/?api=1&query=' +
            encodeURIComponent(address + ' ' + city + ' ' + country)
        );
    }
};

/**
 * The users Object has various methods for processing a list of users (userList).
 * The userList takes the following form:
 *
 * [ user, user, ... ]
 *
 *  Where each user is an Object with the following form:
 *
 * {
 *   id: 1,                              // Number, the user's id
 *   firstName: "Paige",                 // String, the user's first name
 *   lastName: "Bools",                  // String, the user's last name
 *   birthDate: "1995-02-04T07:34:45Z",  // String, a UTC formatted Date string
 *   phone: "8989068955",                // String, phone number with spaces/dashes
 *   email: "pbools0@webmd.com",         // String, user's email
 *   creditScore: 776,                   // Number, a credit score between 200 and 800
 *   address: "476 Veith Parkway",       // String, user's street address
 *   city: "Cuamba",                     // String, user's city
 *   country: "Mozambique",              // String, user's country
 *   isStudent: false                    // Boolean, whether use is a student
 * }
 *
 * See user-data.json for sample data used in some of the tests.  This data was
 * generated with https://mockaroo.com/.
 */
const users = {
    /**
     * Return the number of users in userList (array), or 0 if userList is null/
     * undefined.
     *
     * @param {Array[Object]} userList
     */
    getUserCount: function(userList) {
        if (userList) return userList.length;
        else return 0;
    },

    /**
     * Return the list (array) of all users in userList who are students
     * (i.e., isStudent === true).
     *
     * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     *
     * @param {Array[Object]} userList
     */
    getStudents: function(userList) {
        return userList.filter(user => user.isStudent === true);
    },

    /**
     * Return a list (array) of all users with a credit score equal to or
     * greater than minScore.
     *
     * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     *
     * @param {Array[Object]} userList
     * @param {Number} minScore
     */
    getUsersWithGoodCredit: function(userList, minScore) {
        return userList.filter(
            user => user.creditScore === minScore || user.creditScore > minScore
        );
    },

    /**
     * Creates a username from the firstName and lastName properties for each
     * user in userList.  Use the util.generateUsername() function you wrote above.
     * Return the updated list of users.
     *
     * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
     *
     * @param {Array[Object]} userList
     */
    setUsernames: function(userList) {
        userList.forEach(function(user) {
            user.username = utils.generateUsername(user.firstName, user.lastName);
        });
        return userList;
    },

    /**
     * Every user Object has an id, a unique number. This function determines
     * the next id (Number) to use, based on the user.id values in userList.
     * Returns the next id (Number) that should be used, based on the highest
     * value for the ids in the current userList.
     *
     * @param {Array[Object]} userList
     */
    getNextId: function(userList) {
        var highest = userList[0].id;
        userList.forEach(function(user) {
            if (user.id > highest) highest = user.id;
        });
        return highest + 1;
    },

    /**
     * Generates a list of Google Map URLs for all users, returning an Array
     * of Objects, with id and url.  The url should be generated using your
     * util.generateGoogleMapsURL() written above.  The returned array will
     * take the following form:
     *
     * [{ id: 1, url: 'https://www.google.com/maps/search/?api=1&query=City%20Hall%2C%20New%20York%2C%20USA'}, ...]
     *
     * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     *
     * @param {Array[Object]} userList
     */
    getMapURLs: function(userList) {
        var generate = userList.map(function(user) {
            var googleMapUrl = {};
            googleMapUrl.url = utils.generateGoogleMapsURL(user.address, user.city, user.country);
            googleMapUrl.id = user.id;
            return googleMapUrl;
        });
        return generate;
    },

    /**
     * Returns an Array of Names and formatted phone numbers, using the
     * util.formatPhoneNumber() function you wrote above.  The array
     * you return should take the following form:
     *
     * [ {name: 'First Last', phone: '(555) 555-5555'}, ...]
     *
     * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     *
     * @param {Array[Object]} userList
     */
    getPhoneList: function(userList) {
        var format = userList.map(function(user) {
            var namePhone = {};
            namePhone.name = user.firstName + ' ' + user.lastName;
            namePhone.phone = utils.formatPhoneNumber(user.phone);
            return namePhone;
        });
        return format;
    },

    /**
     * Create an Object that groups all users by their country.  Each key of the
     * new Object should be a country name:
     *
     * {
     *    "Mexico": [...],
     *    "China": [...],
     *    ...
     * }
     *
     * As you loop through each user in the user list, examine the country and
     * add the country key (and an empty array), or use an existing one if you've
     * already encountered it.  Each country key should hold an array, which has
     * all the user objects found for that country.
     *
     * @param {Array[Object]} userList
     */
    groupByCountry: function(userList) {
        var country = {};
        for (var user of userList) {
            if (country[user.country]) {
                country[user.country].unshift(user);
            } else {
                country[user.country] = [];
                country[user.country].unshift(user);
            }
        }
        return country;
    },

    /**
     * Adds all users from users Array to userList.
     *
     * newUsers is an Array of Object(s) with the following properties:
     * @param {String} firstName
     * @param {String} lastName
     * @param {Date} birthDate
     * @param {String} phone
     * @param {String} email
     * @param {Number} creditScore
     * @param {String} address
     * @param {String} city
     * @param {String} country
     * @param {Boolean} isStudent
     *
     * Use your users.getNextId() function to determine which id to give the
     * users you add to userList.
     *
     * Return the number of new users added.
     */
    addUsers: function(userList, ...newUsers) {
        newUsers.forEach(function(user) {
            user.id = users.getNextId(userList);
            userList.push(user);
        });
        return newUsers.length;
    },

    /**
     * Remove all users with the given ids from userList.  Return a new list of
     * all removed user Objects.
     *
     * @param {Array[String]} userList - list of users
     * @param {Array[Number]} ids - one or more user ids to be removed
     */
    extractUsersById: function(userList, ...ids) {
        var newList = [];
        userList.forEach(function(user) {
            if (ids.includes(user.id)) {
                newList.push(user);
                userList.splice(userList.indexOf(user), 1);
            }
        });
        return newList;
    },

    /**
     * Sorts the Array of users (userList) according to their birth dates,
     * youngest to oldest.
     *
     * @param {Array[Object]} userList
     */
    sortByDateOfBirth: function(userList) {
        userList.sort(function(date1, date2) {
            if (date1.birthDate > date2.birthDate) return -1;
            if (date1.birthDate < date2.birthDate) return 1;
            return 0;
        });
        return userList;
    }
};

/**
 * Do not modify the following code, which exposes your functions to the tests.
 */
module.exports = {
    utils,
    users
};
