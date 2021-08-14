/**
 * Get full name. Takes into consideration that some first names
 * may be null.
 * @param firstName
 * @param lastName
 * @returns fullName
 */
export function getFullName(firstName: string, lastName: string) {
  let fullName: string = lastName;
  if (firstName) {
    fullName = `${firstName} ${lastName}`;
  }
  return fullName;
}

/**
 * Get initials of a name. Takes into consideration that some first names
 * may be null.
 * @param firstName
 * @param lastName
 * @returns initials
 */
export function getInitials(firstName: string, lastName: string) {
  let initials: string = `${lastName[0].toUpperCase()}`;
  if (firstName) {
    initials = `${firstName[0].toUpperCase()}${initials}`;
  } else if (lastName.indexOf(' ')) {
    // this is a bit naive, but it's trying to handle taking a last name
    // with two names, and add that second name's initial.
    const secondInitial = lastName.substr(lastName.indexOf(' ') + 1, 1);
    initials = `${initials}${secondInitial}`;
  }

  return initials;
}
