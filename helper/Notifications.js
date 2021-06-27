import ApplicationService from "../services/ApplicationService";
import NotificationService from "../services/NotificationService";

var lastNotificationFetch = 0;
var NotificationList = [];
var interval = null;
// var notificationSubject=new BehaviourSubject();
function FetchNotifications() {
  interval = setInterval(() => {
    // console.log(lastNotificationFetch);
    // console.log(new Date().getTime());
    if (lastNotificationFetch + 5000 < new Date().getTime()) {
      // console.log("Sending fetch notification request");
      lastNotificationFetch = new Date().getTime();
      NotificationService.GetNotificationsList({ IsRequiredCount: 1 })
        .then((res) => {
          NotificationList = res;
        })
        .catch((err) => {
          //console.log(err.message);
        });
    } else {
      //console.log("called within 5 secs, ignoring");
    }
  }, 6000);
}
function ClearInterval() {
  clearInterval(interval);
}

function Start() {
  if (interval == null) FetchNotifications();
}
function GetNotificationCount() {
  return NotificationList.length;
}
function GetAllNotifications() {
  return NotificationList;
}

const Notifications = {
  GetAllNotifications,
  GetNotificationCount,
  Start,
  ClearInterval,
};

export default Notifications;
