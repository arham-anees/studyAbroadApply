import Fetch from "./Axios";
import Urls from "./Urls";

function GetNotificationsList({ IsRequiredCount }) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        Urls.NotificationsList + `?IsRequiredCount=${IsRequiredCount}`;
      Fetch.Get(url)
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function DeleteNotification(id) {
  return new Promise((resolve, reject) => {
    try {
      console.log(id);
      const url = Urls.DeleteNotification; // + `?NotificationID=${id}`;
      Fetch.Post({ url, data: { NotificationID: id } })
        .then((response) => {
          console.log(response);
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      console.log(err);
      reject(e);
    }
  });
}

function MarkAllNotificationAsRead() {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.MarkAllNotificationAsRead;
      Fetch.Get(url)
        .then((response) => {
          if (response) resolve(response);
          else reject(response);
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}
export default NotificationService = {
  GetNotificationsList,
  DeleteNotification,
  MarkAllNotificationAsRead,
};
