(function() {
    /**
     * Helper object for working with countries data and extracting information.
     * See countries-data.js for format of the countries data set.
     */
    var countries = {
        /**
         * Store all countries from countries-data.js on `countries.all` for convenience.
         */
        all: window.countriesData,

        /**
         * Return an array of all countries, with the Name Object replaced by the
         * appropriate translation, or English if not specified (or unknown).  For
         * example, when language="English", you would process the record for Canada into:
         *
         * {
         *     code: "CA",
         *     continent: "Americas",
         *     areaInKm2: 9984670,
         *     population: 36624199,
         *     capital: "Ottawa",
         *     name: "Canada"
         * }
         *
         * Supported languages include:
         *
         * English, Arabic, Chinese, French, Hindi, Korean, Japanese, Russian
         *
         * Uses `countries.all` as the underlying array of countries to be processed.
         */
        getByLanguage: function(language) {
            language = Object.keys(countries.all[0].name).includes(language)
                ? language
                : 'English';
            var getByLanguage = countries.all.map(function(country) {
                var display = {};
                display.code = country.code;
                display.continent = country.continent;
                display.areaInKm2 = country.areaInKm2;
                display.population = country.population;
                display.capital = country.capital;
                display.name = country.name[language];
                return display;
            });
            return getByLanguage;
        },

        /**
         * Return an array of countries with a population greater than or equal to
         * `minPopulation`, and possibly less than equal to `maxPopulation` (if defined)
         * otherwise allow any number greater than `minPopulation`.
         *
         * Uses getByLanguage('English') to get English names for countries.
         *
         * @param {Number} minPopulation - (Required) minimum population value
         * @param {Number} maxPopulation - (Optional) maximum population value
         */
        getByPopulation: function(minPopulation, maxPopulation) {
            function checkpopulation(countries) {
                var display;
                if (maxPopulation === undefined)
                    display = countries.population >= minPopulation;
                else
                    display =
                        countries.population >= minPopulation &&
                        countries.population <= maxPopulation;
                return display;
            }
            return countries.getByLanguage('English').filter(checkpopulation);
        },

        /**
         * Return an array of countries for the given `continent` with an area
         * greater than or equal to the given `area` in square KM.
         *
         * Uses getByLanguage('English') to get English names for countries.
         *
         * @param {String} continent - (Required) name of the continent (e.g., Europe)
         * @param {Number} minArea - (Required) minimum number of KM2 area
         */
        getByAreaAndContinent: function(continent, minArea) {
            function checkContinent(countries) {
                return (
                    countries.continent === continent &&
                    countries.areaInKm2 >= minArea
                );
            }
            return countries.getByLanguage('English').filter(checkContinent);
        }
    };

    /**
     * Helper functions for building table elements.
     */
    var tableHelper = {
        /**
         * Clears (any) existing rows from the #table-rows table body
         */
        clearTable: function() {
            var tbl = document.querySelector('#table-rows');
            tbl.innerHTML = '';
        },

        /**
         * Takes a `country.code` (e.g., "CA" for Canada) and returns an <img>
         * element with its `src` property set the appropriate flag image URL
         * for this code, e.g., src="flags/ca.png" for Canada.
         */
        countryCodeToFlagImg: function(countryCode) {
            var img = document.createElement('img');
            img.setAttribute('width', '40');
            img.setAttribute('height', '20');
            img.setAttribute('alt', '');
            img.src = 'flags/' + countryCode + '.png';
            return img;
        },

        /**
         * Takes a single `country` object and converts it to a <tr> with <td>
         * child elements for every column in the row.  The row should match the
         * expected format of the table (i.e., flag, code, country, continent, etc).
         * Return the new <tr>...</tr> row.
         *
         * Use the DOM methods document.createElement(), element.appendChild(), etc
         * to create your <tr> row.
         */
        countryToRow: function(country) {
            function getTdElement(text) {
                var cell = document.createElement('td');
                var cellText = document.createTextNode(text);
                cell.appendChild(cellText);
                return cell;
            }
            var row = document.createElement('tr');
            var t1 = document.createElement('td');
            row.appendChild(t1);
            var img = tableHelper.countryCodeToFlagImg(country.code);
            t1.appendChild(img);
            row.appendChild(getTdElement(country.code));
            row.appendChild(getTdElement(country.name));
            row.appendChild(getTdElement(country.continent));
            row.appendChild(getTdElement(country.areaInKm2));
            row.appendChild(getTdElement(country.population));
            row.appendChild(getTdElement(country.capital));
            return row;
        },

        /**
         * Takes an array of `country` Objects named `countries`, and passes each
         * `country` in the array  to `tableHelper.countryToRow()`.  The resulting
         * rows are then appended to the #table-rows table body element.  Make sure
         * you use `tableHelper.clear()` to remove any existing rows before you do this.
         */
        countriesToTable: function(countries) {
            var table = document.querySelector('#table-rows');
            tableHelper.clearTable();
            for (var i = 0; i < countries.length; i++) {
                table.appendChild(tableHelper.countryToRow(countries[i]));
            }
        }
    };

    /**
     * Register click handlers for every menu item in the page.  Use the `countries`
     * and `tableHelper` Objects, and their associated methods, to update/populate
     * the #table-rows table body with the appropriate set of countries, based on the
     * menu item clicked.
     *
     * Make sure you also update the #subtitle heading to properly reflect what
     * is in the table after you populate it. For example: "List of Countries
     * and Dependencies - Population between 1 and 2 millon" or "List of Countries
     * and Dependencies - All countries in Asia" etc.
     */
    function setupMenuHandlers() {
        document.querySelector('#menu_english').onclick = function() {
            tableHelper.countriesToTable(countries.getByLanguage('English'));
            document.querySelector('#subtitle').innerHTML =
                'List of Countries and Dependencies - in English';
        };

        document.querySelector('#menu_arabic').onclick = function() {
            tableHelper.countriesToTable(countries.getByLanguage('Arabic'));
            document.querySelector('#subtitle').innerHTML =
                'List of Countries and Dependencies - in Arabic';
        };

        document.querySelector('#menu_chinese').onclick = function() {
            tableHelper.countriesToTable(countries.getByLanguage('Chinese'));
            document.querySelector('#subtitle').innerHTML =
                'List of Countries and Dependencies - in Chinese';
        };

        document.querySelector('#menu_french').onclick = function() {
            tableHelper.countriesToTable(countries.getByLanguage('French'));
            document.querySelector('#subtitle').innerHTML =
                'List of Countries and Dependencies - in French';
        };

        document.querySelector('#menu_hindi').onclick = function() {
            tableHelper.countriesToTable(countries.getByLanguage('Hindi'));
            document.querySelector('#subtitle').innerHTML =
                'List of Countries and Dependencies - in Hindi';
        };

        document.querySelector('#menu_korean').onclick = function() {
            tableHelper.countriesToTable(countries.getByLanguage('Korean'));
            document.querySelector('#subtitle').innerHTML =
                'List of Countries and Dependencies - in Korean';
        };

        document.querySelector('#menu_japanese').onclick = function() {
            tableHelper.countriesToTable(countries.getByLanguage('Japanese'));
            document.querySelector('#subtitle').innerHTML =
                'List of Countries and Dependencies - in Japanese';
        };

        document.querySelector('#menu_russian').onclick = function() {
            tableHelper.countriesToTable(countries.getByLanguage('Russian'));
            document.querySelector('#subtitle').innerHTML =
                'List of Countries and Dependencies - in Russian';
        };

        document.querySelector(
            '#menu_population_100_000_000m'
        ).onclick = function() {
            tableHelper.countriesToTable(countries.getByPopulation(100000000));
            document.querySelector('#subtitle').innerHTML =
                'List of Countries and Dependencies - Population greater than 10 million';
        };

        document.querySelector('#menu_population_1m_2m').onclick = function() {
            tableHelper.countriesToTable(
                countries.getByPopulation(10000000, 20000000)
            );
            document.querySelector('#subtitle').innerHTML =
                'List of Countries and Dependencies - Population between 1 and 2 millon';
        };

        document.querySelector('#menu_americas_1mkm').onclick = function() {
            tableHelper.countriesToTable(
                countries.getByAreaAndContinent('Americas', 1000000)
            );
            document.querySelector('#subtitle').innerHTML =
                'List of Countries and Dependencies - Population greater than 1 millon Km2 in Americas ';
        };

        document.querySelector('#menu_asia_all').onclick = function() {
            tableHelper.countriesToTable(
                countries.getByAreaAndContinent('Asia', 0)
            );
            document.querySelector('#subtitle').innerHTML =
                'List of Countries and Dependencies - All countries in Asia';
        };
    }

    // When the page loads, setup all event handlers by calling setup function.
    window.onload = setupMenuHandlers;
})();
