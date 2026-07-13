import nodemailer from "nodemailer";
import Notification from "@/models/Notification";

export async function sendReminderEmail(reminder) {
  const { title, date, time, email } = reminder;

  if (!email) {
    console.log(`No email configured for reminder: ${title}`);
    return false;
  }

  try {
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      console.warn("SMTP credentials are not configured in .env. Simulating email delivery...");
      await Notification.create({
        title: "Email Dispatch (Simulated)",
        description: `Simulated reminder email sent to ${email} for task "${title}" on ${date} at ${time}.`,
        type: "success"
      });
      return true;
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });

    const mailOptions = {
      from: `"ICC Admin Workspace" <${user}>`,
      to: email,
      subject: `Reminder Notification: ${title}`,
      text: `Hello,\n\nThis is an automated reminder from your ICC Admin Console.\n\nTask: ${title}\nDate: ${date}\nTime: ${time}\n\nRegards,\nICC Admin Console`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #0a1f44; border: 1px solid #e2e8f0; max-width: 600px;">
          <h2 style="color: #005ea6; border-bottom: 2px solid #005ea6; padding-bottom: 8px;">ICC Task Reminder</h2>
          <p>Hello,</p>
          <p>This is an automated reminder regarding the following scheduled activity:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; font-weight: bold; width: 120px;">Task Title:</td>
              <td style="padding: 10px;">${title}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Date:</td>
              <td style="padding: 10px;">${date}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; font-weight: bold;">Time:</td>
              <td style="padding: 10px;">${time}</td>
            </tr>
          </table>
          <p style="font-size: 11px; color: #64748b; margin-top: 25px; border-t: 1px solid #e2e8f0; padding-top: 10px;">
            Sent automatically from the ICC Administration Panel.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    await Notification.create({
      title: "Email Dispatch (Success)",
      description: `Successfully delivered reminder email to ${email} for "${title}".`,
      type: "success"
    });

    return true;
  } catch (error) {
    console.error("Email dispatch failed:", error);
    await Notification.create({
      title: "Email Dispatch (Failed)",
      description: `Failed to deliver email to ${email} for "${title}": ${error.message}`,
      type: "warning"
    });
    return false;
  }
}

export async function sendApplicationEmail(application) {
  const { name, email, phone, roleTitle, coverLetter, resumeName } = application;
  const targetEmail = "prernasharma9327@gmail.com";

  try {
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      console.warn("SMTP credentials are not configured in .env. Simulating email dispatch to prernasharma9327@gmail.com...");
      await Notification.create({
        title: "Application Alert (Simulated)",
        description: `Simulated job application email for ${name} (${roleTitle}) dispatched to ${targetEmail}.`,
        type: "info"
      });
      return true;
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });

    const mailOptions = {
      from: `"ICC Careers Desk" <${user}>`,
      to: targetEmail,
      subject: `New Job Application: ${name} - ${roleTitle}`,
      text: `Hello Admin,\n\nA new application has been submitted on the ICC Career Portal.\n\nCandidate Details:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}\n- Role: ${roleTitle}\n- Resume File: ${resumeName || "None attached"}\n\nCover Letter/Statement:\n${coverLetter || "No statement provided."}\n\nRegards,\nICC Careers Integration`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #0a1f44; border: 1px solid #e2e8f0; max-width: 600px; border-radius: 8px;">
          <h2 style="color: #005ea6; border-bottom: 2px solid #005ea6; padding-bottom: 8px; margin-top: 0;">New Job Application Received</h2>
          <p>Hello Admin,</p>
          <p>A new applicant has submitted their profile on the ICC Careers Portal:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; font-weight: bold; width: 140px; border-bottom: 1px solid #edf2f7;">Candidate Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Position Applied:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; color: #005ea6; font-weight: bold;">${roleTitle}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Email Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Phone Number:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7;">${phone}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Attached Resume:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7;">${resumeName || "No file attached"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 6px;">
            <h4 style="margin: 0 0 8px 0; color: #0a1f44; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Cover Note / Statement</h4>
            <p style="margin: 0; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${coverLetter || "No cover statement provided."}</p>
          </div>

          <p style="font-size: 11px; color: #64748b; margin-top: 25px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            This is an automated delivery from the ICC Workspace Platform. Manage applications and download files directly from your admin dashboard.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    await Notification.create({
      title: "Application Email Delivered",
      description: `Delivered alert to ${targetEmail} for candidate ${name} (${roleTitle}).`,
      type: "success"
    });

    return true;
  } catch (error) {
    console.error("Application email dispatch failed:", error);
    await Notification.create({
      title: "Application Email Failed",
      description: `Failed to deliver application alert to ${targetEmail} for ${name}: ${error.message}`,
      type: "warning"
    });
    return false;
  }
}

export async function sendEnquiryEmail(enquiry) {
  const { name, email, phone, projectType, message } = enquiry;
  const targetEmail = "prernasharma9327@gmail.com";

  try {
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      console.warn("SMTP credentials are not configured in .env. Simulating email dispatch to prernasharma9327@gmail.com...");
      await Notification.create({
        title: "Enquiry Alert (Simulated)",
        description: `Simulated project enquiry email for ${name} (${projectType}) dispatched to ${targetEmail}.`,
        type: "info"
      });
      return true;
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });

    const mailOptions = {
      from: `"ICC Workspace Enquiries" <${user}>`,
      to: targetEmail,
      subject: `New Client Enquiry: ${name} - ${projectType}`,
      text: `Hello Admin,\n\nA new project enquiry has been submitted on the ICC website.\n\nEnquiry Details:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}\n- Project Type: ${projectType}\n\nClient Message:\n${message || "No detailed message provided."}\n\nRegards,\nICC Enquiries Desk`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #0a1f44; border: 1px solid #e2e8f0; max-width: 600px; border-radius: 8px;">
          <h2 style="color: #005ea6; border-bottom: 2px solid #005ea6; padding-bottom: 8px; margin-top: 0;">New Project Enquiry Received</h2>
          <p>Hello Admin,</p>
          <p>A potential client has submitted a contact enquiry:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; font-weight: bold; width: 140px; border-bottom: 1px solid #edf2f7;">Client Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Project Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; color: #005ea6; font-weight: bold;">${projectType}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Email Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Phone Number:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7;">${phone}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 6px;">
            <h4 style="margin: 0 0 8px 0; color: #0a1f44; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Client Message</h4>
            <p style="margin: 0; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${message || "No detailed message provided."}</p>
          </div>

          <p style="font-size: 11px; color: #64748b; margin-top: 25px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            This is an automated notification from the ICC Administration Platform. View details or manage project leads inside your admin dashboard console.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    await Notification.create({
      title: "Enquiry Email Delivered",
      description: `Delivered enquiry alert to ${targetEmail} for ${name} (${projectType}).`,
      type: "success"
    });

    return true;
  } catch (error) {
    console.error("Enquiry email dispatch failed:", error);
    await Notification.create({
      title: "Enquiry Email Failed",
      description: `Failed to deliver enquiry alert to ${targetEmail} for ${name}: ${error.message}`,
      type: "warning"
    });
    return false;
  }
}


