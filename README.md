# vue-learn
My repository to store my learning progress by subscribing the courses by Maximilian Schwarzmuller: https://www.udemy.com/course/vuejs-2-the-complete-guide/

## Method vs Computed vs Watch

| Method  | Computed  | Watch |
|---|---|---|
| Use with event binding or data binding | Use with data binding  | Not used directly in template |
|Data Binding: method is executed for every "re-render" cycle of the component|Computer properties are only re-evaluated if one of their "used values" changed|Allows you to run any code in reaction to some changed data (e.g. send Http request, etc...)|
|Use for events or data that really needs to be re-evaluated all the time|Use for data that depends on other data|Use for any non-data update you want to make|
