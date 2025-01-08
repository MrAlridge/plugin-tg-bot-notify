import { definePlugin } from "@halo-dev/console-shared";
import HomeView from "./views/HomeView.vue";
import { IconPlug } from "@halo-dev/components";
import { markRaw } from "vue";

export default definePlugin({
  components: {},
  routes: [
    {
      parentName: "Root",
      route: {
        path: "/tgBotNotifyConfig",
        name: "BotConfig",
        component: HomeView,
        meta: {
          title: "TG推送设置",
          searchable: true,
          menu: {
            name: "TG推送设置",
            group: "工具",
            icon: markRaw(IconPlug),
            priority: 0,
          },
        },
      },
    },
  ],
  extensionPoints: {},
});
