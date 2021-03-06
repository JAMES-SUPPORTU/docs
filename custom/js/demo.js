angular.module('app').controller('DemoCtrl', ['$http', '$scope', '$rootScope', '$timeout',
  function($http, $scope, $rootScope, $timeout) {
    function setByHash() {
      var hash = location.hash.slice(2);
      if (!$scope.plats[hash]) {
        $scope.currentSDKType = 'all';
      } else {
        $scope.currentSDKType = location.hash.slice(2);
      }

    }
    $scope.keys = function(obj){
      return obj? Object.keys(obj) : [];
    }

    $scope.hasChildren = function(plat){
      return $scope.demos[plat]? $scope.demos[plat].length : 0;
    }

    $scope.plats = {
      'ios': 'iOS',
      'android': 'Android',
      'unity': 'Unity',
      'python': 'Python',
      'winphone': 'Windows Phone',
      'web': 'Web',
      'node': 'Node.js',
      'php': 'PHP',
      'weapp': '微信小程序',
      'reactnative': 'React Native'
    }
    $scope.demos = {
      'ios': [{
        name: '数据存储入门',
        desc: '本教程模拟商品发布的场景，讲解 LeanCloud 数据存储的核心用法。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/StorageStarted',
        type: 'ios',
        qcloudShow: true
      },{
        name: 'LeanStorage Demo',
        desc: '展示了 LeanCloud 数据存储 SDK 的各种基础和高级用法，帮助开发者尽快上手 SDK。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/ios-simple-demo',
        type: 'ios',
        qcloudShow: true
      },{
        name: 'ChatKit 聊天 UI 组件',
        desc: '一个免费开源的 UI 聊天组件，基于 LeanCloud 实时通信 IM 服务，支持 iOS 7+。它将聊天的常用功能和 UI 一起提供给开发者进行二次开发。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/ChatKit-OC',
        type: 'ios',
        qcloudShow: true
      },{
        name: 'LiveKit 直播 UI 组件',
        desc: 'LeanCloud 官方推出的一个专门开发视频直播的 UI 组件，包含直播、文字聊天、弹幕、送礼物等界面。支持无人数限制的聊天室和自定义消息。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/LeanCloudLiveKit-iOS',
        type: 'ios',
        qcloudShow: true
      },{
        name: '用户反馈 Feedback',
        desc: '演示了 LeanCloud 反馈模块的用法。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/feedback-demo',
        type: 'ios',
        qcloudShow: false
      },{
        name: 'LeanCloud 短信',
        desc: 'LeanCloud 开源的短信演示程序，功能包括发送简单的文本验证码、按照自定义模版发送复杂的文本短信、发送语音验证码、使用手机号进行账号注册登录和重置密码等。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/leancloud-smsdemo-ios',
        type: 'ios',
        qcloudShow: false
      }],
      'android': [{
        name: '数据存储入门',
        desc: '本教程模拟商品发布的场景，讲解 LeanCloud 数据存储的核心用法。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/StorageStarted',
        type: 'android',
        qcloudShow: true
      },{
        name: 'LeanStorage Demo',
        desc: '展示了 LeanCloud 数据存储 SDK 的各种基础和高级用法，包括用户系统、文件上传下载、子类化、对象复杂查询等。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/android-simple-demo',
        type: 'android',
        qcloudShow: true
      },{
        name: 'LeanChat-Android',
        desc: 'LeanChat 是用 LeanCloud 聊天服务做的一个沟通工具，有Android、iOS版本。后台也完全基于 LeanCloud，存储用户信息，好友关系等。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/leanchat-android',
        type: 'android',
        qcloudShow: true
      },{
        name: 'ChatKit 聊天 UI 组件',
        desc: '一个免费开源的 UI 聊天组件，基于 LeanCloud 实时通信 IM 服务，支持 iOS 7+。它将聊天的常用功能和 UI 一起提供给开发者进行二次开发。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/LeanCloudChatKit-Android',
        type: 'android',
        qcloudShow: true
      },{
        name: 'LiveKit 直播 UI 组件',
        desc: 'LeanCloud 官方推出的一个专门开发视频直播的 UI 组件，包含直播、文字聊天、弹幕、送礼物等界面。支持无人数限制的聊天室和自定义消息。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/LeanCloudLiveKit-Android',
        type: 'android',
        qcloudShow: true
      },{
        name: 'WeShare',
        desc: '使用 LeanCloud 应用内社交组件打造的类似朋友圈的分享小应用，具备时间线、发文字发图、点赞、关注等功能。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/WeShare',
        type: 'android',
        qcloudShow: false
      },{
        name: 'LeanPush Demo',
        desc: '一个使用了 LeanCloud 推送消息服务的简单 Demo，直接在客户端推送消息，并自己接收。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/android-push-demo',
        type: 'android',
        qcloudShow: true
      },{
        name: 'SNS 第三方登录',
        desc: '演示如何通过 QQ 和微博授权来登录。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/android-sns-demo',
        type: 'android',
        qcloudShow: false
      },{
        name: '短信验证码',
        desc: '使用 LeanCloud 发送和验证短信验证码。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/android-sms-demo',
        type: 'android',
        qcloudShow: false
      }],
      'python': [{
        name: 'Flask Todo Demo',
        desc: 'Flask Todo Demo 是一个云引擎的示例项目。它运行在 Python 3 上，依赖 flask 和 LeanCloud Python SDK。点击详情来查看在线 Demo。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/flask-todo-demo',
        type: 'python',
        qcloudShow: true
      }],
      'web': [{
        name: '数据存储入门',
        desc: '本教程模拟商品发布的场景，讲解 LeanCloud 数据存储的核心用法。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/StorageStarted',
        type: 'web',
        qcloudShow: true
      }, {
        name: 'LeanTodo (Vue)',
        desc: '使用 JavaScript 存储 SDK 与 Vue.js 实现的 LeanTodo 应用。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/leantodo-vue/',
        type: 'web',
        qcloudShow: true
      },{
        name: 'LeanMessage',
        desc: '使用 JavaScript 实时通讯 SDK 与 Angular 实现的完整功能的聊天 WebApp',
        downPath: '',
        mdPath: 'https://github.com/leancloud/LeanMessage-Demo',
        type: 'web',
        qcloudShow: true
      }],
      'php': [{
        name: '云引擎 Todo',
        desc: '使用了 Slim PHP 框架搭建的 Todo 程序。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/slim-todo-demo',
        type: 'php',
        qcloudShow: true
      }],
      'weapp': [{
        name: 'LeanTodo',
        desc: '使用 JavaScript 存储 SDK 在微信小程序平台上实现的 LeanTodo 应用。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/leantodo-weapp',
        type: 'weapp',
        qcloudShow: true
      }],
      'reactnative': [{
        name: 'LeanTodo',
        desc: '使用 JavaScript 存储 SDK 与 React Native 实现的 LeanTodo 应用。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/leantodo-react-native',
        type: 'reactnative',
        qcloudShow: true
      },{
        name: '图片上传',
        desc: 'React Native 搭配 LeanCloud 文件存储服务，实现在 iOS 和 Android 客户端上传图片。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/react-native-image-upload-demo',
        type: 'reactnative',
        qcloudShow: true
      },{
        name: '消息推送',
        desc: '演示了如何在 React Native for iOS 中使用 LeanCloud 推送服务。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/react-native-installation-demo',
        type: 'reactnative',
        qcloudShow: true
      }],
      'node': [{
        name: '云引擎与 SDK 交互数据',
        desc: '此项目主要展示了在云引擎中如何将 AVObject 对象传递给客户端，以及如何定义云函数、处理云函数错误回调以及 Hook 函数用法。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/sdk-demo-engine',
        type: 'node',
        qcloudShow: true
      },{
        name: '微信机器人',
        desc: '演示了如何利用云引擎，快速接入微信，搭建微信服务号的后端。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/LeanEngine-WechatBot',
        type: 'node',
        qcloudShow: true
      },{
        name: '在线聊天客服系统',
        desc: '本项目使用 LeanCloud 云引擎、数据存储和聊天服务实现一个基本的客服系统。主要功能包括：根据客服工作状态和排队人数自动为用户指派客服、用户与客服在线聊天、客服设置工作状态决定是否接受新任务、用户为客服打分等。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/realtime-service-demo',
        type: 'node',
        qcloudShow: true
      },{
        name: '云引擎 Todo',
        desc: '该项目是 LeanCloud 云引擎示例项目，使用 Node.js 和 Express 实现。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/leanengine-todo-demo',
        type: 'node',
        qcloudShow: true
      },{
        name: '云引擎 + Websocket',
        desc: 'LeanCloud 云引擎支持使用 Websocket 协议，实现由服务器主动向浏览器发送通知。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/leanengine-websocket-demo',
        type: 'node',
        qcloudShow: true
      },{
        name: 'Redis 缓存',
        desc: '使用 LeanCache 来实现抢红包、排行榜缓存、关联数据缓存、图形验证码、节点选举和锁、任务队列、热点只读数据缓存等实用功能，展示出 Redis 缓存的实际应用效果。',
        downPath: '',
        mdPath: 'https://github.com/leancloud/lean-cache-demos',
        type: 'node',
        qcloudShow: true
      }]
    }
    $scope.$watch('currentSDKType',function(){
      $scope.displayDemos = [];
      var arr = [];
      if($scope.currentSDKType == 'all'){
        angular.forEach($scope.demos, function(v,k){
          arr = arr.concat(v) ;
        });
        $scope.displayDemos = arr;
      }else{
        $scope.displayDemos = $scope.demos[$scope.currentSDKType]
      }
    })
    
    $scope.setCurrentType = function(type) {
      $scope.currentSDKType = type;
    }
    setByHash();
    $(window).on('hashchange', function() {
      $timeout(function() {
        setByHash();
      })
    });


  }
  ]);
