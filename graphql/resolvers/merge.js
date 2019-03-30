const User = require("../../models/user");
const Event = require("../../models/event");

const transformEvent = event =>  {
    return {
        ...event._doc,
        _id: event.id,
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, event.creator)
      };
}

const user = async userId => {
    try {
      const user = await User.findById(userId);
      return {
        ...user._doc,
        _id: user.id,
        createdEvents: events.bind(this, user._doc.createdEvents)
      };
    } catch (err) {
      throw err;
    }
  };

  const events = async eventIds => {
    try {
      const events = await Event.find({ _id: { $in: eventIds } });
     return events.map(event => {
        return transformEvent(event)
      });
    } catch (err) {
      throw err;
    }
  };

  const singleEvent = async eventId => {
    try {
      const event = await Event.findById(eventId);
      return transformEvent(event)
    } catch (err) {
      throw err;
    }
  };

//   exports.user = user;
//   exports.events = events
//   exports.singleEvent = singleEvent;
  exports.transformEvent = transformEvent