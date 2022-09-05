$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("filter.feature");
formatter.feature({
  "line": 1,
  "name": "Verify year filter",
  "description": "As a user i would like to filter book part",
  "id": "verify-year-filter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12253026500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on marketing page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on marketing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept the consent",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userIsOnMarketingPage()"
});
formatter.result({
  "duration": 299430400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAcceptTheConsent()"
});
formatter.result({
  "duration": 193088200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "As user i would like to filter book part monthly",
  "description": "",
  "id": "verify-year-filter;as-user-i-would-like-to-filter-book-part-monthly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click on last month link in year filter",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should verify that book part arrange with last month publication date",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iClickOnLastMonthLinkInYearFilter()"
});
formatter.result({
  "duration": 3665572000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldVerifyThatBookPartArrangeWithLastMonthPublicationDate()"
});
formatter.result({
  "duration": 605259200,
  "status": "passed"
});
formatter.after({
  "duration": 1244846000,
  "status": "passed"
});
formatter.before({
  "duration": 5966860000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on marketing page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on marketing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept the consent",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userIsOnMarketingPage()"
});
formatter.result({
  "duration": 10653100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAcceptTheConsent()"
});
formatter.result({
  "duration": 183200400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "As user i would like to filter book part weekly",
  "description": "",
  "id": "verify-year-filter;as-user-i-would-like-to-filter-book-part-weekly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I click on last week link in year filter",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should verify book part arrange with last week date",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iClickOnLastWeekLinkInYearFilter()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldVerifyBookPartArrangeWithLastWeekDate()"
});
formatter.result({
  "duration": 3150436000,
  "error_message": "java.time.format.DateTimeParseException: Text \u00274 August 2022\u0027 could not be parsed at index 0\r\n\tat java.time.format.DateTimeFormatter.parseResolved0(DateTimeFormatter.java:1949)\r\n\tat java.time.format.DateTimeFormatter.parse(DateTimeFormatter.java:1851)\r\n\tat java.time.LocalDate.parse(LocalDate.java:400)\r\n\tat emerald.com.pages.MarketingPages.verifyPublicationByWeek(MarketingPages.java:144)\r\n\tat emerald.com.steps.MyStepdefs.iShouldVerifyBookPartArrangeWithLastWeekDate(MyStepdefs.java:41)\r\n\tat ✽.Then I should verify book part arrange with last week date(filter.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1321327300,
  "status": "passed"
});
});