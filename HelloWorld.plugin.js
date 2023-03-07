/**
 * @name HelloworldPlugin
 * @author FB
 * @description To show Hello World Modal
 * @version 0.0.1
 */
// Do stuff here before being called
module.exports = meta => ({
    start() {
      BdApi.showConfirmationModal("Hello World", "This is just a basic plugin created by FB!");    },
    stop() {
      // Cleanup when disabled
    }
  });
