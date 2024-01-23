export const formatYoutubeCount = (number: number, locale = "en-US") => {
  const formattedNumber = new Intl.NumberFormat(locale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  }).format(number);

  return formattedNumber;
};

export const timeSincePublished = (
  uploadDate: string,
  locale: string = "en-US"
): string => {
  const currentDate = new Date();
  const uploadedDate = new Date(uploadDate);
  const timeDifferenceInSeconds = Math.floor(
    (currentDate.getTime() - uploadedDate.getTime()) / 1000
  );

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (timeDifferenceInSeconds < 60) {
    return rtf.format(-timeDifferenceInSeconds, "second");
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return rtf.format(-minutes, "minute");
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return rtf.format(-hours, "hour");
  } else if (timeDifferenceInSeconds < 604800) {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return rtf.format(-days, "day");
  } else {
    const weeks = Math.floor(timeDifferenceInSeconds / 604800);
    return rtf.format(-weeks, "week");
  }
};

export const convertDurationToTime = (duration: string): string => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const match = duration.match(regex)!;

  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;

  const formattedTime: string[] = [];

  if (hours > 0) {
    formattedTime.push(`${hours}`);
  }

  formattedTime.push(`${minutes.toString().padStart(2, "0")}`);

  if (seconds > 0 || (hours === 0 && minutes === 0)) {
    formattedTime.push(`${seconds.toString().padStart(2, "0")}`);
  }

  const result = formattedTime.join(":");
  return result;
};
