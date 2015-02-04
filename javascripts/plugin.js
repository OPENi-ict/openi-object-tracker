$(document).ready(function() {
  setInterval(function() {
    var $dataTableRoot = $('.dataTable[data-report="OpeniObjectTracker.getContentNames"]');
    var dataTableInstance = $dataTableRoot.data('uiControlObject');
    dataTableInstance.resetAllFilters();
    dataTableInstance.reloadAjaxDataTable();
  }, 10 * 1000);
});