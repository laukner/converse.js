/* START: Removable components
 * --------------------
 * Any of the following components may be removed if they're not needed.
 */
import "converse-autocomplete";
import "converse-bookmarks";       // XEP-0048 Bookmarks
import "converse-caps";            // XEP-0115 Entity Capabilities
import "converse-chatview";        // Renders standalone chat boxes for single user chat
import "converse-controlbox";      // The control box
import "converse-dragresize";      // Allows chat boxes to be resized by dragging them
import "converse-embedded";
import "converse-fullscreen";
import "converse-push";            // XEP-0357 Push Notifications
import "converse-headline";        // Support for headline messages
import "@converse/headless/converse-mam";             // XEP-0313 Message Archive Management
import "converse-minimize";        // Allows chat boxes to be minimized
import "converse-muc-views";       // Views related to MUC
import "converse-notification";    // HTML5 Notifications
import "converse-omemo";
import "@converse/headless/converse-ping";            // XEP-0199 XMPP Ping
import "converse-register";        // XEP-0077 In-band registration
import "converse-roomslist";       // Show currently open chat rooms
import "converse-rosterview";
import "@converse/headless/converse-vcard";           // XEP-0054 VCard-temp
/* END: Removable components */

import converse from "@converse/headless/converse-core";
export default converse;
