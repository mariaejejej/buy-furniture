import { addDays, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";

export const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=e889e91171ecd8d19d18aec1f9a7",
      {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then(async (json) => {
        const a = Object.values(json);
        console.log('aaaaaa',a[0]);
        setData(a[0]);

        const ab = formatDate(a[0]);
        const finala = formatToSend(ab);
        fetch(
          "https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=e889e91171ecd8d19d18aec1f9a7",

          {
            method: "POST",
            body: JSON.stringify(finala),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
          .then((response) => response.json())
          .then((json) => console.log(json));

        //formatDays();
      });
  }, []);

  const formatDate = (data) => {
    const formatPartners = [];
    data.forEach((elem) => {
      const inArray = formatPartners.findIndex(
        (a) => a.country === elem.country
      );
      if (inArray === -1) {
        const newElem = {
          country: elem.country,
          matchedDates: [],
          persons: [
            {
              email: elem.email,
              dates: elem.availableDates,
            },
          ],
        };
        formatPartners.push(newElem);
      } else {
        const persons = [...formatPartners[inArray].persons];
        persons.push({
          email: elem.email,
          dates: elem.availableDates,
        });
        formatPartners[inArray] = {
          ...formatPartners[inArray],
          persons: persons,
        };
      }
    });

    formatPartners.forEach((country) => {
      country.persons.forEach((person) => {
        const newConsecutive = formatDays(person.dates);
        person.newConsecutive = newConsecutive;
      });
    });
console.log('country',formatPartners )
    formatPartners.forEach((country) => {
      country.persons.forEach((person) => {
        person.newConsecutive.forEach((date) => {
          country.persons.forEach((elem) => {
            const found = elem.newConsecutive.find(
              (newPersonDate) =>
                newPersonDate.start === date.start &&
                newPersonDate.end === date.end &&
                person.email !== elem.email
            );
            if (found) {
              const alreadyMatched = country.matchedDates.findIndex(
                (match) =>
                  date.start === match.dates.start &&
                  date.end === match.dates.end
              );
              if (
                alreadyMatched !== -1 &&
                !country.matchedDates[alreadyMatched].person.find(
                  (a) => a === elem.email
                )
              ) {
                const copy = { ...country.matchedDates[alreadyMatched] };

                copy.person.push(elem.email);
                copy.count = copy.count + 1;
                country.matchedDates[alreadyMatched] = copy;
              } else if (alreadyMatched === -1)
                country.matchedDates.push({
                  person: [person.email, elem.email],
                  dates: date,
                  count: 2,
                });
            }
          });
        });
      });
    });
    console.log(formatPartners);
    return formatPartners;
  };

  const formatDays = (dates) => {
    // const dates = [
    //   "2019-04-29",
    //   "2019-04-30",
    //   "2019-05-01",
    //   "2019-05-03",
    //   "2019-05-04",
    // ];

    //First, we map them to date objects, and sort the new list.
    const sorted = dates.map((d) => parseISO(d)).sort((a, b) => a - b);

    //Then we reduce over the entire list, checking pairwise for the dates to be consecutive
    const pairs = [];
    for (let i = 0; i < sorted.length; i++) {
      const end = sorted[i + 1];

      if (addDays(sorted[i], 1) - end === 0 && i + 2 < sorted.length) {
        if (
          addDays(sorted[i], 2) - sorted[i + 2] === 0 &&
          i + 3 < sorted.length
        ) {
          if (
            addDays(sorted[i], 3) - sorted[i + 3] === 0 &&
            i + 4 < sorted.length
          )
            if (addDays(sorted[i], 4) - sorted[i + 4] === 0) {
              pairs.push({
                start: sorted[i].toISOString().substring(0, 10),
                end: sorted[i + 4].toISOString().substring(0, 10),
              });
              i = i + 3;
            } else {
              pairs.push({
                start: sorted[i].toISOString().substring(0, 10),
                end: sorted[i + 3].toISOString().substring(0, 10),
              });
              i = i + 2;
            }
          else {
            pairs.push({
              start: sorted[i].toISOString().substring(0, 10),
              end: sorted[i + 2].toISOString().substring(0, 10),
            });
            i = i + 1;
          }
        } else
          pairs.push({
            start: sorted[i].toISOString().substring(0, 10),
            end: end.toISOString().substring(0, 10),
          });
      }
    }
    console.log(pairs);
    return pairs;
  };

  const formatToSend = (formatPartner) => {
    const final = {
      countries: [],
    };

    formatPartner.forEach((country) => {
      country.final = {
        attendeeCount: 0,
      };
      country.matchedDates.forEach((date) => {
        if (date.count > country.final.attendeeCount) {
          country.final = {
            attendeeCount: date.count,
            attendees: date.person,
            startDate: date.dates,
          };
        }
      });
    });


    const newFinal = formatPartner.map((country)=> {
        return{
            name: country.country,
            attendeeCount: country.final.attendeeCount,
            attendees: country.final.attendees,
            startDate: country.final.startDate.start,
          
        }
    })

    const finalFinal = {countries: newFinal}
    console.log('Final', formatPartner, finalFinal)
    return finalFinal

  };
  return <div>test</div>;
};
