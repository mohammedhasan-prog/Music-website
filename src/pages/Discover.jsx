import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useDispatch,useSelector } from "react-redux";

const Discover = () => {
  const dispatch=useDispatch();
  const {activeSong,isPlaying}=useSelector((state)=>state.player);
  const data = [
    {
      layout: "5",
      type: "MUSIC",
      key: "104382921",
      title: "Ginseng Strip 2002",
      subtitle: "Yung Lean",
      share: {
        subject: "Ginseng Strip 2002 - Yung Lean",
        text: "I used Shazam to discover Ginseng Strip 2002 by Yung Lean.",
        href: "https://www.shazam.com/track/104382921/ginseng-strip-2002",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e9/c4/bd/e9c4bd59-080d-329b-c763-7a7baabb9377/7071245098315_1.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Ginseng Strip 2002 by Yung Lean.",
        html: "https://www.shazam.com/snippets/email-share/104382921?lang=en-US&country=US",
        avatar:
          "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/45/87/f9/4587f9b0-8bfd-91f2-f920-a665073f1607/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/104382921",
      },
      images: {
        background:
          "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/45/87/f9/4587f9b0-8bfd-91f2-f920-a665073f1607/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e9/c4/bd/e9c4bd59-080d-329b-c763-7a7baabb9377/7071245098315_1.jpg/400x400cc.jpg",
        coverarthq:
          "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e9/c4/bd/e9c4bd59-080d-329b-c763-7a7baabb9377/7071245098315_1.jpg/400x400cc.jpg",
        joecolor: "b:1e1f24p:fffdffs:9ccb5et:d1d0d3q:83a852",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1090125770",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/6d/5a/19/6d5a1958-843a-5036-7e51-b8df8f15d039/mzaf_2947175551136950081.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/ginseng-strip-2002/1090125765?i=1090125770&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/ginseng-strip-2002/1090125765?i=1090125770&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_42917790",
          },
          alias: "yung-lean",
          id: "42917790",
          adamid: "472502104",
        },
      ],
      url: "https://www.shazam.com/track/104382921/ginseng-strip-2002",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/472502104/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/42917790/artist-similarities-id-42917790/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "589545994",
      title: "Enemy (From the series Arcane League of Legends)",
      subtitle: "Imagine Dragons, Arcane & League of Legends",
      share: {
        subject:
          "Enemy (From the series Arcane League of Legends) - Imagine Dragons, Arcane & League of Legends",
        text: "I used Shazam to discover Enemy (From the series Arcane League of Legends) by Imagine Dragons, Arcane & League of Legends.",
        href: "https://www.shazam.com/track/589545994/enemy-from-the-series-arcane-league-of-legends",
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/5d/d8/fc/5dd8fc36-85ad-e7c9-8288-e7d12d332934/21UM1IM39402.rgb.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Enemy (From the series Arcane League of Legends) by Imagine Dragons, Arcane & League of Legends.",
        html: "https://www.shazam.com/snippets/email-share/589545994?lang=en-US&country=US",
        avatar:
          "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/83/bd/b7/83bdb7ff-63a6-2252-e04b-ece8ebdc5768/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/589545994",
      },
      images: {
        background:
          "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/83/bd/b7/83bdb7ff-63a6-2252-e04b-ece8ebdc5768/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/5d/d8/fc/5dd8fc36-85ad-e7c9-8288-e7d12d332934/21UM1IM39402.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/5d/d8/fc/5dd8fc36-85ad-e7c9-8288-e7d12d332934/21UM1IM39402.rgb.jpg/400x400cc.jpg",
        joecolor: "b:191a15p:dd8353s:ff2358t:b66e46q:d0214b",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1593813937",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/7c/29/d3/7c29d334-a112-8f50-02de-f90cef0ae2cd/mzaf_17115533119839493723.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/enemy-from-the-series-arcane-league-of-legends/1593813507?i=1593813937&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/enemy-from-the-series-arcane-league-of-legends/1593813507?i=1593813937&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_40951653",
          },
          alias: "imagine-dragons",
          id: "40951653",
          adamid: "358714030",
        },
        {
          follow: {
            followkey: "A_205872444",
          },
          alias: "jid",
          id: "205872444",
          adamid: "282841404",
        },
        {
          follow: {
            followkey: "A_200581421",
          },
          alias: "league-of-legends",
          id: "200581421",
          adamid: "960030338",
        },
      ],
      url: "https://www.shazam.com/track/589545994/enemy-from-the-series-arcane-league-of-legends",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/358714030/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1592348907",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1592348907?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/40951653/artist-similarities-id-40951653/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "514260283",
      title: "Heat Waves",
      subtitle: "Glass Animals",
      share: {
        subject: "Heat Waves - Glass Animals",
        text: "I used Shazam to discover Heat Waves by Glass Animals.",
        href: "https://www.shazam.com/track/514260283/heat-waves",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/da/8b/77/da8b7731-6f4f-eacf-5e74-8b23389eefa1/20UMGIM03371.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Heat Waves by Glass Animals.",
        html: "https://www.shazam.com/snippets/email-share/514260283?lang=en-US&country=US",
        avatar:
          "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/06/b3/09/06b30967-8ba7-2206-79d4-e2011f18d599/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/514260283",
      },
      images: {
        background:
          "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/06/b3/09/06b30967-8ba7-2206-79d4-e2011f18d599/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/da/8b/77/da8b7731-6f4f-eacf-5e74-8b23389eefa1/20UMGIM03371.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/da/8b/77/da8b7731-6f4f-eacf-5e74-8b23389eefa1/20UMGIM03371.rgb.jpg/400x400cc.jpg",
        joecolor: "b:ccabe7p:0c000fs:33003dt:32223aq:52225f",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1508562516",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d6/34/b2/d634b201-0f5f-ad53-53d9-1d234d8cb906/mzaf_7902463447065774733.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/heat-waves/1508562310?i=1508562516&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/heat-waves/1508562310?i=1508562516&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_41338871",
          },
          alias: "glass-animals",
          id: "41338871",
          adamid: "528928008",
        },
      ],
      url: "https://www.shazam.com/track/514260283/heat-waves",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/528928008/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1520434039",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1520434039?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/41338871/artist-similarities-id-41338871/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "5164711",
      title: "Family Affair",
      subtitle: "Mary J. Blige",
      share: {
        subject: "Family Affair - Mary J. Blige",
        text: "I used Shazam to discover Family Affair by Mary J. Blige.",
        href: "https://www.shazam.com/track/5164711/family-affair",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/4e/6f/bc/4e6fbc9d-ac4c-9018-fe66-80c42b473832/00602547111470.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Family Affair by Mary J. Blige.",
        html: "https://www.shazam.com/snippets/email-share/5164711?lang=en-US&country=US",
        avatar:
          "https://is2-ssl.mzstatic.com/image/thumb/Features116/v4/d1/12/08/d112086d-11a4-ebc2-f21a-419346306a59/mzl.qkqsfmpx.jpg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/5164711",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/Features116/v4/d1/12/08/d112086d-11a4-ebc2-f21a-419346306a59/mzl.qkqsfmpx.jpg/800x800cc.jpg",
        coverart:
          "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/4e/6f/bc/4e6fbc9d-ac4c-9018-fe66-80c42b473832/00602547111470.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/4e/6f/bc/4e6fbc9d-ac4c-9018-fe66-80c42b473832/00602547111470.rgb.jpg/400x400cc.jpg",
        joecolor: "b:131919p:c1d0d3s:db9b4at:9eabaeq:b38140",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1440817530",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/39/04/52/39045203-bf29-cd00-19bf-54abaf17c3e7/mzaf_9166630490368086351.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/family-affair/1440817211?i=1440817530&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/family-affair/1440817211?i=1440817530&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_5241",
          },
          alias: "mary-j-blige",
          id: "5241",
          adamid: "1392280",
        },
      ],
      url: "https://www.shazam.com/track/5164711/family-affair",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1392280/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1445841193",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1445841193?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/5241/artist-similarities-id-5241/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "577983490",
      title: "abcdefu",
      subtitle: "GAYLE",
      share: {
        subject: "abcdefu - GAYLE",
        text: "I used Shazam to discover abcdefu by GAYLE.",
        href: "https://www.shazam.com/track/577983490/abcdefu",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a8/28/f3/a828f3eb-74a6-96c9-356f-940da7905f54/075679774309.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover abcdefu by GAYLE.",
        html: "https://www.shazam.com/snippets/email-share/577983490?lang=en-US&country=US",
        snapchat: "https://www.shazam.com/partner/sc/track/577983490",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a8/28/f3/a828f3eb-74a6-96c9-356f-940da7905f54/075679774309.jpg/400x400cc.jpg",
        coverart:
          "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a8/28/f3/a828f3eb-74a6-96c9-356f-940da7905f54/075679774309.jpg/400x400cc.jpg",
        coverarthq:
          "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a8/28/f3/a828f3eb-74a6-96c9-356f-940da7905f54/075679774309.jpg/400x400cc.jpg",
        joecolor: "b:000000p:fefefes:e6e0dct:cbcbcbq:b8b3b0",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1576949673",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/99/c3/82/99c382f8-36b3-a6d4-4d54-0f69b4a03110/mzaf_11541366159516399923.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/abcdefu/1576949671?i=1576949673&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/abcdefu/1576949671?i=1576949673&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      url: "https://www.shazam.com/track/577983490/abcdefu",
      highlightsurls: {
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1581390160?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "599842025",
      title: "Ameno Amapiano Remix (You Wanna Bamba) [Mixed]",
      subtitle: "Nektunez & Goya Menor",
      share: {
        subject:
          "Ameno Amapiano Remix (You Wanna Bamba) [Mixed] - Nektunez & Goya Menor",
        text: "I used Shazam to discover Ameno Amapiano Remix (You Wanna Bamba) [Mixed] by Nektunez & Goya Menor.",
        href: "https://www.shazam.com/track/599842025/ameno-amapiano-remix-you-wanna-bamba-mixed",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/80/d6/d9/80d6d97e-6c37-15de-d80f-c61cdfa618c6/886449838677.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Ameno Amapiano Remix (You Wanna Bamba) [Mixed] by Nektunez & Goya Menor.",
        html: "https://www.shazam.com/snippets/email-share/599842025?lang=en-US&country=US",
        snapchat: "https://www.shazam.com/partner/sc/track/599842025",
      },
      images: {
        background:
          "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/80/d6/d9/80d6d97e-6c37-15de-d80f-c61cdfa618c6/886449838677.jpg/400x400cc.jpg",
        coverart:
          "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/80/d6/d9/80d6d97e-6c37-15de-d80f-c61cdfa618c6/886449838677.jpg/400x400cc.jpg",
        coverarthq:
          "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/80/d6/d9/80d6d97e-6c37-15de-d80f-c61cdfa618c6/886449838677.jpg/400x400cc.jpg",
        joecolor: "b:030303p:f9f9f9s:cdcbc8t:c7c7c7q:a4a3a1",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1603826298",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/65/77/34/657734a4-a02b-1318-4af6-0132b81292fe/mzaf_17018473143177010931.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/ameno-amapiano-remix-you-wanna-bamba/1603826293?i=1603826298&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/ameno-amapiano-remix-you-wanna-bamba/1603826293?i=1603826298&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_212996083",
          },
          alias: "goya-menor",
          id: "212996083",
          adamid: "1571948300",
        },
      ],
      url: "https://www.shazam.com/track/599842025/ameno-amapiano-remix-you-wanna-bamba-mixed",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1571948300/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/212996083/artist-similarities-id-212996083/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "579595745",
      title: "Cold Heart (PNAU Remix)",
      subtitle: "Elton John & Dua Lipa",
      share: {
        subject: "Cold Heart (PNAU Remix) - Elton John & Dua Lipa",
        text: "I used Shazam to discover Cold Heart (PNAU Remix) by Elton John & Dua Lipa.",
        href: "https://www.shazam.com/track/579595745/cold-heart-pnau-remix",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/db/29/07/db290719-0123-4b57-8593-426925c454ba/21UMGIM74865.rgb.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Cold Heart (PNAU Remix) by Elton John & Dua Lipa.",
        html: "https://www.shazam.com/snippets/email-share/579595745?lang=en-US&country=US",
        avatar:
          "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/22/7a/b7/227ab79d-8c57-3622-f414-ba2e83252ee5/mzl.qlkmclct.jpg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/579595745",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/22/7a/b7/227ab79d-8c57-3622-f414-ba2e83252ee5/mzl.qlkmclct.jpg/800x800cc.jpg",
        coverart:
          "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/db/29/07/db290719-0123-4b57-8593-426925c454ba/21UMGIM74865.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/db/29/07/db290719-0123-4b57-8593-426925c454ba/21UMGIM74865.rgb.jpg/400x400cc.jpg",
        joecolor: "b:241615p:ffc373s:d8adbft:d3a060q:b48f9d",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1597492470",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1f/a4/15/1fa415a4-374c-9229-51ac-c12c06b44c18/mzaf_5338123291213855125.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/cold-heart-pnau-remix/1597492455?i=1597492470&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/cold-heart-pnau-remix/1597492455?i=1597492470&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_3647",
          },
          alias: "elton-john",
          id: "3647",
          adamid: "54657",
        },
        {
          follow: {
            followkey: "A_201886252",
          },
          alias: "dua-lipa",
          id: "201886252",
          adamid: "1031397873",
        },
      ],
      url: "https://www.shazam.com/track/579595745/cold-heart-pnau-remix",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/54657/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1580928539",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1580928539?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/3647/artist-similarities-id-3647/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "230109",
      title: "Still D.R.E.",
      subtitle: "Dr. Dre Feat. Snoop Dogg",
      share: {
        subject: "Still D.R.E. - Dr. Dre Feat. Snoop Dogg",
        text: "I used Shazam to discover Still D.R.E. by Dr. Dre Feat. Snoop Dogg.",
        href: "https://www.shazam.com/track/230109/still-dre",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fd/63/ed/fd63ed6c-178c-7fa9-4844-29a7326bf655/06UMGIM01277.rgb.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Still D.R.E. by Dr. Dre Feat. Snoop Dogg.",
        html: "https://www.shazam.com/snippets/email-share/230109?lang=en-US&country=US",
        avatar:
          "https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/58/80/e9/5880e97c-f19f-5d5d-5d9f-229ef3fa8071/mza_6418309645502471883.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/230109",
      },
      images: {
        background:
          "https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/58/80/e9/5880e97c-f19f-5d5d-5d9f-229ef3fa8071/mza_6418309645502471883.png/800x800cc.jpg",
        coverart:
          "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fd/63/ed/fd63ed6c-178c-7fa9-4844-29a7326bf655/06UMGIM01277.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fd/63/ed/fd63ed6c-178c-7fa9-4844-29a7326bf655/06UMGIM01277.rgb.jpg/400x400cc.jpg",
        joecolor: "b:030306p:fcfafbs:65db65t:cac9caq:51af52",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1440782870",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/46/33/c5/4633c572-2b46-d64c-bc93-01eb340af647/mzaf_11468463915354974758.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/still-d-r-e-feat-snoop-dogg/1440782221?i=1440782870&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/still-d-r-e-feat-snoop-dogg/1440782221?i=1440782870&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_25731",
          },
          alias: "dr-dre",
          id: "25731",
          adamid: "35315",
        },
        {
          follow: {
            followkey: "A_18",
          },
          alias: "snoop-dogg",
          id: "18",
          adamid: "21769",
        },
      ],
      url: "https://www.shazam.com/track/230109/still-dre",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/35315/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1445730676",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1445730676?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/25731/artist-similarities-id-25731/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "580442939",
      title: "Do It to It",
      subtitle: "Acraze Feat. Cherish",
      share: {
        subject: "Do It to It - Acraze Feat. Cherish",
        text: "I used Shazam to discover Do It to It by Acraze Feat. Cherish.",
        href: "https://www.shazam.com/track/580442939/do-it-to-it",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/3b/da/58/3bda58c3-4cb9-b30d-b455-035010707df9/21UMGIM70915.rgb.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Do It to It by Acraze Feat. Cherish.",
        html: "https://www.shazam.com/snippets/email-share/580442939?lang=en-US&country=US",
        avatar:
          "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/29/78/92/297892ac-214f-b047-c963-e836d05a8b6d/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/580442939",
      },
      images: {
        background:
          "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/29/78/92/297892ac-214f-b047-c963-e836d05a8b6d/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/3b/da/58/3bda58c3-4cb9-b30d-b455-035010707df9/21UMGIM70915.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/3b/da/58/3bda58c3-4cb9-b30d-b455-035010707df9/21UMGIM70915.rgb.jpg/400x400cc.jpg",
        joecolor: "b:f2ebf2p:110a08s:321d13t:3e3737q:58463f",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1579983161",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/9d/10/17/9d1017f6-b4da-6d20-4a16-0051fbc640a5/mzaf_18002530859004185072.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/do-it-to-it-feat-cherish/1579983158?i=1579983161&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/do-it-to-it-feat-cherish/1579983158?i=1579983161&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_204767325",
          },
          alias: "acraze",
          id: "204767325",
          adamid: "1262931166",
        },
      ],
      url: "https://www.shazam.com/track/580442939/do-it-to-it",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1262931166/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/204767325/artist-similarities-id-204767325/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "506004198",
      title: "Middle of the Night",
      subtitle: "Elley Duhé",
      share: {
        subject: "Middle of the Night - Elley Duhé",
        text: "I used Shazam to discover Middle of the Night by Elley Duhé.",
        href: "https://www.shazam.com/track/506004198/middle-of-the-night",
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/64/03/cb/6403cb43-d892-4663-d759-5093b5ed610c/886448203087.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Middle of the Night by Elley Duhé.",
        html: "https://www.shazam.com/snippets/email-share/506004198?lang=en-US&country=US",
        avatar:
          "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/d9/8a/3b/d98a3bbc-85cd-b2eb-5afe-df93bc7d8ece/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/506004198",
      },
      images: {
        background:
          "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/d9/8a/3b/d98a3bbc-85cd-b2eb-5afe-df93bc7d8ece/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/64/03/cb/6403cb43-d892-4663-d759-5093b5ed610c/886448203087.jpg/400x400cc.jpg",
        coverarthq:
          "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/64/03/cb/6403cb43-d892-4663-d759-5093b5ed610c/886448203087.jpg/400x400cc.jpg",
        joecolor: "b:1f1110p:ffffffs:e2c579t:d2cfcfq:bba164",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1492152237",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/bd/93/e4/bd93e4c7-1e4e-7e9f-dfbc-c39895db2a63/mzaf_16143399368245884322.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/middle-of-the-night/1492152228?i=1492152237&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/middle-of-the-night/1492152228?i=1492152237&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_203403491",
          },
          alias: "elley-duhé",
          id: "203403491",
          adamid: "394295270",
        },
      ],
      url: "https://www.shazam.com/track/506004198/middle-of-the-night",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/394295270/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1604476412",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1604476412?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/203403491/artist-similarities-id-203403491/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "238942255",
      title: "Alright",
      subtitle: "Kendrick Lamar",
      share: {
        subject: "Alright - Kendrick Lamar",
        text: "I used Shazam to discover Alright by Kendrick Lamar.",
        href: "https://www.shazam.com/track/238942255/alright",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/33/eb/45/33eb4563-a4bf-edb1-9a27-55bb02fdb8e4/00602547276636.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Alright by Kendrick Lamar.",
        html: "https://www.shazam.com/snippets/email-share/238942255?lang=en-US&country=US",
        avatar:
          "https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/13/3d/89/133d89fd-9305-6eae-14ad-1668e0e5279d/mza_4449571582288811102.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/238942255",
      },
      images: {
        background:
          "https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/13/3d/89/133d89fd-9305-6eae-14ad-1668e0e5279d/mza_4449571582288811102.png/800x800cc.jpg",
        coverart:
          "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/33/eb/45/33eb4563-a4bf-edb1-9a27-55bb02fdb8e4/00602547276636.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/33/eb/45/33eb4563-a4bf-edb1-9a27-55bb02fdb8e4/00602547276636.rgb.jpg/400x400cc.jpg",
        joecolor: "b:b7b5b6p:060605s:1e1e1dt:2a2928q:3d3c3b",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1440829463",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/73/a2/24/73a224a8-9aa7-5a7c-e369-c06aee28da80/mzaf_17455711799408457102.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/alright/1440828886?i=1440829463&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/alright/1440828886?i=1440829463&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_40904751",
          },
          alias: "kendrick-lamar",
          id: "40904751",
          adamid: "368183298",
        },
      ],
      url: "https://www.shazam.com/track/238942255/alright",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/368183298/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1444845854",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1444845854?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/40904751/artist-similarities-id-40904751/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "11177141",
      title: "Lose Yourself",
      subtitle: "Eminem",
      share: {
        subject: "Lose Yourself - Eminem",
        text: "I used Shazam to discover Lose Yourself by Eminem.",
        href: "https://www.shazam.com/track/11177141/lose-yourself",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/01/be/e0/01bee04f-a126-4f42-fa54-ff3b37c97639/06UMGIM16683.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Lose Yourself by Eminem.",
        html: "https://www.shazam.com/snippets/email-share/11177141?lang=en-US&country=US",
        avatar:
          "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/11177141",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
        coverart:
          "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/01/be/e0/01bee04f-a126-4f42-fa54-ff3b37c97639/06UMGIM16683.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/01/be/e0/01bee04f-a126-4f42-fa54-ff3b37c97639/06UMGIM16683.rgb.jpg/400x400cc.jpg",
        joecolor: "b:000d1dp:f6eff3s:a3e279t:c4c2c8q:82b767",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1445727316",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/42/b8/b042b8a5-4d1f-f245-2c8a-e15db9d9da5a/mzaf_2494845488576943071.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/lose-yourself/1445726870?i=1445727316&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/lose-yourself/1445726870?i=1445727316&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_1419",
          },
          alias: "eminem",
          id: "1419",
          adamid: "111051",
        },
      ],
      url: "https://www.shazam.com/track/11177141/lose-yourself",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/111051/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1419/artist-similarities-id-1419/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "597478942",
      title: "Mujeriego",
      subtitle: "Ryan Castro",
      share: {
        subject: "Mujeriego - Ryan Castro",
        text: "I used Shazam to discover Mujeriego by Ryan Castro.",
        href: "https://www.shazam.com/track/597478942/mujeriego",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/29/73/62/297362c0-f0ff-1462-ef63-24ede5d642f9/886449817276.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Mujeriego by Ryan Castro.",
        html: "https://www.shazam.com/snippets/email-share/597478942?lang=en-US&country=US",
        snapchat: "https://www.shazam.com/partner/sc/track/597478942",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/29/73/62/297362c0-f0ff-1462-ef63-24ede5d642f9/886449817276.jpg/400x400cc.jpg",
        coverart:
          "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/29/73/62/297362c0-f0ff-1462-ef63-24ede5d642f9/886449817276.jpg/400x400cc.jpg",
        coverarthq:
          "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/29/73/62/297362c0-f0ff-1462-ef63-24ede5d642f9/886449817276.jpg/400x400cc.jpg",
        joecolor: "b:131309p:fcc300s:f1b600t:cd9f01q:c49601",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1600575365",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/fc/f2/86/fcf28630-1169-fc62-551a-b1c23e7b08a2/mzaf_15424404558480825655.plus.aac.p.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/mujeriego/1600575035?i=1600575365&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/mujeriego/1600575035?i=1600575365&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      url: "https://www.shazam.com/track/597478942/mujeriego",
      highlightsurls: {},
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "20081922",
      title: "In Da Club",
      subtitle: "50 Cent",
      share: {
        subject: "In Da Club - 50 Cent",
        text: "I used Shazam to discover In Da Club by 50 Cent.",
        href: "https://www.shazam.com/track/20081922/in-da-club",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/ef/03/ac/ef03ac6f-6e39-fdca-19ba-c6dceb8cd337/17UMGIM08601.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover In Da Club by 50 Cent.",
        html: "https://www.shazam.com/snippets/email-share/20081922?lang=en-US&country=US",
        avatar:
          "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/e0/40/f8/e040f81e-0778-2221-ba15-33fca4ff3827/mzl.okdyshbj.jpg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/20081922",
      },
      images: {
        background:
          "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/e0/40/f8/e040f81e-0778-2221-ba15-33fca4ff3827/mzl.okdyshbj.jpg/800x800cc.jpg",
        coverart:
          "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/ef/03/ac/ef03ac6f-6e39-fdca-19ba-c6dceb8cd337/17UMGIM08601.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/ef/03/ac/ef03ac6f-6e39-fdca-19ba-c6dceb8cd337/17UMGIM08601.rgb.jpg/400x400cc.jpg",
        joecolor: "b:120808p:bac9dbs:b3c0cdt:98a2b0q:939ba5",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1440879594",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3f/d4/ca/3fd4ca9b-7f20-6efa-21c6-86daa1bc812f/mzaf_9190494279893385175.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/in-da-club/1440879586?i=1440879594&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/in-da-club/1440879586?i=1440879594&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_491872",
          },
          alias: "50-cent",
          id: "491872",
          adamid: "112058",
        },
      ],
      url: "https://www.shazam.com/track/20081922/in-da-club",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/112058/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1445827611",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1445827611?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/491872/artist-similarities-id-491872/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "575061784",
      title: "Pepas",
      subtitle: "Farruko",
      share: {
        subject: "Pepas - Farruko",
        text: "I used Shazam to discover Pepas by Farruko.",
        href: "https://www.shazam.com/track/575061784/pepas",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/02/59/6b/02596b89-0475-9b14-3b51-934d24770ec3/886449572236.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Pepas by Farruko.",
        html: "https://www.shazam.com/snippets/email-share/575061784?lang=en-US&country=US",
        avatar:
          "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a7/e7/6a/a7e76a3f-aba3-7ccb-7f39-54ba50ed1c5b/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/575061784",
      },
      images: {
        background:
          "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a7/e7/6a/a7e76a3f-aba3-7ccb-7f39-54ba50ed1c5b/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/02/59/6b/02596b89-0475-9b14-3b51-934d24770ec3/886449572236.jpg/400x400cc.jpg",
        coverarthq:
          "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/02/59/6b/02596b89-0475-9b14-3b51-934d24770ec3/886449572236.jpg/400x400cc.jpg",
        joecolor: "b:080401p:fdfffcs:e9860at:cbccc9q:bc6c08",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1586869915",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f4/d8/36/f4d83642-7224-b117-b0a7-af0d713375a8/mzaf_6572891366325147107.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/pepas/1586869902?i=1586869915&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/pepas/1586869902?i=1586869915&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_40774216",
          },
          alias: "farruko",
          id: "40774216",
          adamid: "364377482",
        },
      ],
      url: "https://www.shazam.com/track/575061784/pepas",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/364377482/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1579568059",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1579568059?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/40774216/artist-similarities-id-40774216/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "360400967",
      title: "Infinity",
      subtitle: "Jaymes Young",
      share: {
        subject: "Infinity - Jaymes Young",
        text: "I used Shazam to discover Infinity by Jaymes Young.",
        href: "https://www.shazam.com/track/360400967/infinity",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/65/49/ec/6549ec2c-8e7f-7fc8-701f-199d6f0697dc/075679758781.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Infinity by Jaymes Young.",
        html: "https://www.shazam.com/snippets/email-share/360400967?lang=en-US&country=US",
        avatar:
          "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/aa/03/82/aa038276-b55a-3702-a91f-7ded47452f1d/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/360400967",
      },
      images: {
        background:
          "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/aa/03/82/aa038276-b55a-3702-a91f-7ded47452f1d/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/65/49/ec/6549ec2c-8e7f-7fc8-701f-199d6f0697dc/075679758781.jpg/400x400cc.jpg",
        coverarthq:
          "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/65/49/ec/6549ec2c-8e7f-7fc8-701f-199d6f0697dc/075679758781.jpg/400x400cc.jpg",
        joecolor: "b:252525p:e7e7e4s:d2b8a9t:c0c0beq:b09a8e",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1606809758",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ba/30/55/ba305527-4f6b-f0c2-d491-857fbcc341df/mzaf_111550824426019523.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/infinity/1606809076?i=1606809758&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/infinity/1606809076?i=1606809758&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_43051303",
          },
          alias: "jaymes-young",
          id: "43051303",
          adamid: "688910162",
        },
      ],
      url: "https://www.shazam.com/track/360400967/infinity",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/688910162/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1609609913",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1609609913?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/43051303/artist-similarities-id-43051303/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "577551383",
      title: "Where Are You Now",
      subtitle: "Lost Frequencies & Calum Scott",
      share: {
        subject: "Where Are You Now - Lost Frequencies & Calum Scott",
        text: "I used Shazam to discover Where Are You Now by Lost Frequencies & Calum Scott.",
        href: "https://www.shazam.com/track/577551383/where-are-you-now",
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/25/79/2a/25792aaa-fe16-c718-27fa-c3b1781780fb/886449449668.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Where Are You Now by Lost Frequencies & Calum Scott.",
        html: "https://www.shazam.com/snippets/email-share/577551383?lang=en-US&country=US",
        avatar:
          "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/b2/39/01/b23901a3-b03a-1c4e-16aa-03057fa64fee/mzl.wwmpmpuv.jpg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/577551383",
      },
      images: {
        background:
          "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/b2/39/01/b23901a3-b03a-1c4e-16aa-03057fa64fee/mzl.wwmpmpuv.jpg/800x800cc.jpg",
        coverart:
          "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/25/79/2a/25792aaa-fe16-c718-27fa-c3b1781780fb/886449449668.jpg/400x400cc.jpg",
        coverarthq:
          "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/25/79/2a/25792aaa-fe16-c718-27fa-c3b1781780fb/886449449668.jpg/400x400cc.jpg",
        joecolor: "b:f19c77p:220b01s:411d05t:4b2819q:64361c",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1576395046",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/de/6e/91/de6e911b-258a-ec52-1247-4d73ae06f0b2/mzaf_14014090408364414231.plus.aac.p.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/where-are-you-now/1576395044?i=1576395046&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/where-are-you-now/1576395044?i=1576395046&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_45851447",
          },
          alias: "lost-frequencies",
          id: "45851447",
          adamid: "877792512",
        },
        {
          follow: {
            followkey: "A_202497574",
          },
          alias: "calum-scott",
          id: "202497574",
          adamid: "190876590",
        },
      ],
      url: "https://www.shazam.com/track/577551383/where-are-you-now",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/877792512/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1582065560",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1582065560?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/45851447/artist-similarities-id-45851447/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "582585201",
      title: "THATS WHAT I WANT",
      subtitle: "Lil Nas X",
      share: {
        subject: "THATS WHAT I WANT - Lil Nas X",
        text: "I used Shazam to discover THATS WHAT I WANT by Lil Nas X.",
        href: "https://www.shazam.com/track/582585201/thats-what-i-want",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/9f/cf/dc/9fcfdc19-7a61-3836-defb-35d817529b25/886449511440.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover THATS WHAT I WANT by Lil Nas X.",
        html: "https://www.shazam.com/snippets/email-share/582585201?lang=en-US&country=US",
        avatar:
          "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/07/89/a3/0789a358-0ee5-6f13-8a54-8dc1a113066a/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/582585201",
      },
      images: {
        background:
          "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/07/89/a3/0789a358-0ee5-6f13-8a54-8dc1a113066a/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/9f/cf/dc/9fcfdc19-7a61-3836-defb-35d817529b25/886449511440.jpg/400x400cc.jpg",
        coverarthq:
          "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/9f/cf/dc/9fcfdc19-7a61-3836-defb-35d817529b25/886449511440.jpg/400x400cc.jpg",
        joecolor: "b:286a80p:f9eae3s:fbeacct:cfd0cfq:d1d1bc",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1582660725",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f9/3e/30/f93e30ce-5100-ab65-4b78-2b71b6009c06/mzaf_14575040342747165136.plus.aac.p.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/thats-what-i-want/1582660720?i=1582660725&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/thats-what-i-want/1582660720?i=1582660725&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: true,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_205070255",
          },
          alias: "lil-nas-x",
          id: "205070255",
          adamid: "1400730578",
        },
      ],
      url: "https://www.shazam.com/track/582585201/thats-what-i-want",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/1400730578/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1586198283",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1586198283?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/205070255/artist-similarities-id-205070255/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "588355736",
      title: "Oh My God",
      subtitle: "Adele",
      share: {
        subject: "Oh My God - Adele",
        text: "I used Shazam to discover Oh My God by Adele.",
        href: "https://www.shazam.com/track/588355736/oh-my-god",
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Oh My God by Adele.",
        html: "https://www.shazam.com/snippets/email-share/588355736?lang=en-US&country=US",
        avatar:
          "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/a2/2d/df/a22ddf71-9254-043c-c162-11fbc25c5ff3/mzl.ilbjswky.jpg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/588355736",
      },
      images: {
        background:
          "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/a2/2d/df/a22ddf71-9254-043c-c162-11fbc25c5ff3/mzl.ilbjswky.jpg/800x800cc.jpg",
        coverart:
          "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/400x400cc.jpg",
        coverarthq:
          "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/400x400cc.jpg",
        joecolor: "b:2d4b53p:eaebe2s:dfd1b4t:c4cbc5q:bcb6a1",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1590036031",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/0e/04/ea/0e04ea1a-a423-6c57-89ad-9b0288ba3857/mzaf_8102174182656200205.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/oh-my-god/1590035691?i=1590036031&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/oh-my-god/1590035691?i=1590036031&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_10080114",
          },
          alias: "adele",
          id: "10080114",
          adamid: "262836961",
        },
      ],
      url: "https://www.shazam.com/track/588355736/oh-my-god",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/262836961/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1604429663",
        trackhighlighturl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1604429663?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/10080114/artist-similarities-id-10080114/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
    {
      layout: "5",
      type: "MUSIC",
      key: "413028875",
      title: "Quiet, The Winter Harbor",
      subtitle: "Mazzy Star",
      share: {
        subject: "Quiet, The Winter Harbor - Mazzy Star",
        text: "I used Shazam to discover Quiet, The Winter Harbor by Mazzy Star.",
        href: "https://www.shazam.com/track/413028875/quiet-the-winter-harbor",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/b6/bf/20/b6bf2009-b64b-98cc-a3af-ea1dbc3af18b/881034116246_Cover.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Quiet, The Winter Harbor by Mazzy Star.",
        html: "https://www.shazam.com/snippets/email-share/413028875?lang=en-US&country=US",
        avatar:
          "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/d4/ba/1f/d4ba1fd7-435c-0db8-faf3-84c1da715c78/mzl.hbxnhehg.jpg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/413028875",
      },
      images: {
        background:
          "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/d4/ba/1f/d4ba1fd7-435c-0db8-faf3-84c1da715c78/mzl.hbxnhehg.jpg/800x800cc.jpg",
        coverart:
          "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/b6/bf/20/b6bf2009-b64b-98cc-a3af-ea1dbc3af18b/881034116246_Cover.jpg/400x400cc.jpg",
        coverarthq:
          "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/b6/bf/20/b6bf2009-b64b-98cc-a3af-ea1dbc3af18b/881034116246_Cover.jpg/400x400cc.jpg",
        joecolor: "b:000000p:e2af6es:ce9e78t:b58c58q:a57e60",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1368617355",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/63/e1/d7/63e1d760-cba1-33ea-bdbf-87502abebc10/mzaf_8242800589192179999.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/quiet-the-winter-harbor/1368616930?i=1368617355&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/quiet-the-winter-harbor/1368616930?i=1368617355&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          follow: {
            followkey: "A_30796",
          },
          alias: "mazzy-star",
          id: "30796",
          adamid: "532997",
        },
      ],
      url: "https://www.shazam.com/track/413028875/quiet-the-winter-harbor",
      highlightsurls: {
        artisthighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/532997/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
        relatedhighlightsurl:
          "https://cdn.shazam.com/video/v3/en-US/US/web/30796/artist-similarities-id-30796/relatedhighlights?max_artists=5&affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web",
      },
      properties: {},
    },
  ];

  return (
    <div className="flex flex-col ">
      <div
        className="w-full flex justify-between item-center 
sm:flex-row flex-col mt-4 mb-10"
      >
        <h2 className="font-bold text-3xl text-white">Discover</h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg text-left sm:mt-0 mt-5"
        >
          {genres.map((genre) => {
            return (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8  ">
        {data.map((song, i) => {
          return (
            <SongCard key={song.key} song={song} i={i}
            isPlaying={isPlaying}
            activeSong={activeSong} 
            data={data}/>
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
