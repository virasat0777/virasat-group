import axios from 'axios';
import qs from 'qs';

export default async function handler(req, res) {
  const {
    name,
    email,
    mobile,
    source,
    message,
    utm_campaign,
    utm_channel,
    utm_keyword,
    utm_placement,
    utm_device,
    utm_medium,
    gclid
  } = req.body;

  const googleFormValue = {
    'entry.449648499': name,
    'entry.1379833540': email,
    'entry.758332158': mobile,
    'entry.1900106466': message,
    'entry.1693361781': source,
    'entry.1830911442': utm_campaign,
    'entry.939490048': utm_channel,
    'entry.729166844': utm_keyword,
    'entry.839903606': utm_placement,
    'entry.2003337495': utm_device,
    'entry.399907321': utm_medium,
    'entry.1966964226': gclid,

  };

  try {
    const response = await axios.post(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeiSAtdDrYUsYb-SqPrJGwu7UWtnO_J6Skmfve3jt4TWX_8FQ/formResponse",
      
      qs.stringify(googleFormValue),
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    res.status(200).json({ success: true, data: response.data });
  } catch (googleFormError) {
    console.error("Error while submitting to Google Forms:", googleFormError);
    res.status(500).json({ success: false, error: googleFormError.message });
  }
}
