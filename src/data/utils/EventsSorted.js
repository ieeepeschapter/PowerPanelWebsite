const sortAndSeparateEvents = (events) => {
  // Convert date string to Date object for comparison
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day); // month is 0-indexed
  };

  // Sort events by date in sdescending order
  events.sort((a, b) => parseDate(b.date) - parseDate(a.date));

  const today = new Date();
  const upcomingEvents = [];
  const pastEvents = [];

  events.forEach((event) => {
    if (parseDate(event.date) >= today) {
      upcomingEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  });

  // reverse upcoming events for ascending order, i.e., nearest at top
  upcomingEvents.reverse()

  return { upcomingEvents, pastEvents };
};

module.exports = {sortAndSeparateEvents}