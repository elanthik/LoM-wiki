// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
// import DefaultTheme from "vitepress/theme-without-fonts";
import MyLayout from "./components/MyLayout.vue";
// import mock Bootstrap-vue
import BTable from "./components/bootstrap-vue/BTable.vue";
// import 連結預覽
import {
  NolebaseInlineLinkPreviewPlugin,
  InjectionKey,
} from "@nolebase/vitepress-plugin-inline-link-preview/client";
import "@nolebase/vitepress-plugin-inline-link-preview/client/style.css";
// import 歷史貢獻
import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";
import "@nolebase/vitepress-plugin-git-changelog/client/style.css";
// import CharacterTab Group
import CharacterTabs from "./components/character/CharacterTabs.vue";
import CharacterTab from "./components/character/CharacterTab.vue";
import Character from "./components/character/base/Character.vue";
import CharacterName from "./components/character/base/CharacterName.vue";
// import CharacterTable from "./components/character/base/CharacterTable.vue";
import MarkCharacterTable from "./components/character/base/MarkCharacterTable.vue";
import CharacterTr from "./components/character/base/CharacterTr.vue";
import CharacterTd from "./components/character/base/CharacterTd.vue";
import CharacterMeet from "./components/character/type/CharacterMeet.vue";
import ChineseStyleTd from "./components/tdStyles/ChineseStyleTd.vue";
// import Icon Group
import Icon from "./components/icon-family/Icon.vue";
import BadendIcon from "./components/icon-family/icons/BadendIcon.vue";
import EndIcon from "./components/icon-family/icons/EndIcon.vue";
import Girl0Icon from "./components/icon-family/icons/Girl0Icon.vue";
import Girl1Icon from "./components/icon-family/icons/Girl1Icon.vue";
import Girl2Icon from "./components/icon-family/icons/Girl2Icon.vue";
import Girl3Icon from "./components/icon-family/icons/Girl3Icon.vue";
import Girl4Icon from "./components/icon-family/icons/Girl4Icon.vue";
import Girl5Icon from "./components/icon-family/icons/Girl5Icon.vue";
import Girl6Icon from "./components/icon-family/icons/Girl6Icon.vue";
import Girl7Icon from "./components/icon-family/icons/Girl7Icon.vue";
import Girl8Icon from "./components/icon-family/icons/Girl8Icon.vue";
// import ItemIcon Group
import ItemIcon from "./components/icon-family/ItemIcon.vue";
import BookItemIcon from "./components/icon-family/itemIcons/BookItemIcon.vue";
import SpecialItemIcon from "./components/icon-family/itemIcons/SpecialItemIcon.vue";
import NewspaperItemIcon from "./components/icon-family/itemIcons/NewspaperItemIcon.vue";
import TeaItemIcon from "./components/icon-family/itemIcons/TeaItemIcon.vue";
import WineItemIcon from "./components/icon-family/itemIcons/WineItemIcon.vue";
// import AchievementIcon
import AchievementIcon from "./components/icon-family/AchievementIcon.vue";
// import MoodIcon
import MoodIcon from "./components/icon-family/MoodIcon.vue";
// tools
import Tabs from "./components/tab/Tabs.vue";
import Tab from "./components/tab/Tab.vue";
import MobileWrapper from "./components/tools/MobileWrapper.vue";
import MarkdownWrapper from "./components/tools/MarkdownWrapper.vue";
import WikiLink from "./components/tools/WikiLink.vue";
import InfoList from "./components/info/InfoList.vue";
import Info from "./components/info/Info.vue";

import "./styles/style.css";
import "./styles/borderless.css";
import "./styles/twikoo.css";
// import EndBackground
import EndBackground from "./components/background/EndBackground.vue";
import EndTitle from "./components/background/EndTitle.vue";
import EndContext from "./components/background/EndContext.vue";
import EndBook from "./components/background/EndBook.vue";

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  enhanceApp({ app }) {
    // import 連結預覽
    app.use(NolebaseInlineLinkPreviewPlugin);
    app.provide(InjectionKey, {
      popupWidth: 600,
      popupHeight: 400,
      locales: {
        "zh-TW": {
          popup: {
            loading: "加載中...",
            openInCurrentPage: "在完整頁面中打開",
          },
        },
      },
    });
    // import 歷史貢獻
    app.use(NolebaseGitChangelogPlugin, {
      locales: {
        "zh-TW": {
          noLogs: "該文章無歷史貢獻",
          noContributors: "該文章無貢獻者",
          viewFullHistory: "查看完整歷史貢獻",
          changelog: {
            title: "歷史貢獻",
            noData: "無歷史貢獻",
          },
          contributors: {
            title: "貢獻者",
            noData: "無貢獻者",
          },
        },
      },
    });
    // import mock Bootstrap-vue
    app.component("BTable", BTable);
    // import CharacterTab Group
    app.component("ChTabs", CharacterTabs);
    app.component("ChTab", CharacterTab);
    app.component("Ch", Character);
    app.component("ChName", CharacterName);
    app.component("ChTable", MarkCharacterTable);
    app.component("ChTr", CharacterTr);
    app.component("ChTd", CharacterTd);
    app.component("CnTd", ChineseStyleTd);
    app.component("ChMeet", CharacterMeet);

    // Icon component group
    app.component("Icon", Icon);
    // following component based on Icon,
    // if you need, you can add image map to function getIconSource() in Icon.vue,
    // and create a new vue file to register
    app.component("BadendIcon", BadendIcon);
    app.component("Girl0Icon", Girl0Icon);
    app.component("Girl1Icon", Girl1Icon);
    app.component("Girl2Icon", Girl2Icon);
    app.component("Girl3Icon", Girl3Icon);
    app.component("Girl4Icon", Girl4Icon);
    app.component("Girl5Icon", Girl5Icon);
    app.component("Girl6Icon", Girl6Icon);
    app.component("Girl7Icon", Girl7Icon);
    app.component("Girl8Icon", Girl8Icon);

    // ItemIcon component group
    app.component("ItemIcon", ItemIcon);
    // following component based on BookItemIcon,
    // It adds an Item background foreach vue file,
    // if you need, you can copy ItemIcon.vue,
    // and create a new vue file to register
    app.component("BookItemIcon", BookItemIcon);
    app.component("SpecialItemIcon", SpecialItemIcon);
    app.component("NewspaperItemIcon", NewspaperItemIcon);
    app.component("TeaItemIcon", TeaItemIcon);
    app.component("WineItemIcon", WineItemIcon);
    app.component("EndIcon", EndIcon);
    // AchievementIcon component
    app.component("AchievementIcon", AchievementIcon);
    // MoodIcon component
    app.component("MoodIcon", MoodIcon);

    // tools
    app.component("Tabs", Tabs);
    app.component("Tab", Tab);
    app.component("MobileWrapper", MobileWrapper);
    app.component("MarkdownWrapper", MarkdownWrapper);
    app.component("WikiLink", WikiLink);
    app.component("InfoList", InfoList);
    app.component("Info", Info);

    // EndBackground component
    app.component("EndBackground", EndBackground);
    app.component("EndTitle", EndTitle);
    app.component("EndContext", EndContext);
    app.component("EndBook", EndBook);
  },
};
