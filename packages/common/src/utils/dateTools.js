/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const MILLISECONDS_TO_SECONDS = 0.001;
const SECONDS_IN_YEAR = 31557600;
const SECONDS_IN_MONTH = 2629800;
const SECONDS_IN_DAY = 86400;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

export const friendlyDate = (date, locale) => {
  let remaining = (Date.now() - date) * MILLISECONDS_TO_SECONDS;
  const years = Math.floor(remaining / SECONDS_IN_YEAR);
  remaining -= years * SECONDS_IN_YEAR;
  const months = Math.floor(remaining / SECONDS_IN_MONTH);
  remaining -= months * SECONDS_IN_MONTH;
  const days = Math.floor(remaining / SECONDS_IN_DAY);
  remaining -= days * SECONDS_IN_DAY;
  if (months || years || days > 6) {
    return new Date(date).toLocaleString(locale);
  }
  if (days > 1) {
    return new Date(date).toLocaleString(locale);
  }
  if (days === 1) {
    return 'yesterday';
  }
  const hours = Math.floor(remaining / SECONDS_IN_HOUR);
  remaining -= hours * SECONDS_IN_HOUR;
  if (hours > 1) {
    return `${hours} hours ago`;
  }
  if (hours === 1) {
    return `${hours} hour ago`;
  }
  const mins = Math.floor(remaining / SECONDS_IN_MINUTE);
  remaining -= mins * SECONDS_IN_MINUTE;
  if (mins > 1) {
    return `${mins} mins ago`;
  }
  if (mins === 1) {
    return `${mins} min ago`;
  }
  if (remaining > 10) {
    return `${remaining} secs ago`;
  }
  return 'just now';
};
