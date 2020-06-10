/*
  Teaching specific data
*/

const keyInfo = require("./modules/_config/key");
import {getPageInfo} from "./modules/_config/config";

export default {
  sid: "oe",
  lang: "en",
  env: "integration",
  getPageInfo: getPageInfo,            //list
  keyInfo: keyInfo,                    //list, bmnet
  bm_modal_key: "bm.oe.modal",         //list
  bm_creation_state: "bm.oe.creation", //bookmark
  bm_list_store: "bm.oe.list",         //bmnet
  bm_topic_list: "bm.oe.topics",       //bmnet
  bm_modal_store: "bm.oe.modal",       //navigator
  url_prefix: "/t/acimoe"              //navigator
};
