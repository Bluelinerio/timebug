package io.lifevision;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;
import io.sentry.RNSentryPackage;
// import com.moengage.core.MoEngage;
// import com.moengage.react.MoEReactPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.reactnativecommunity.slider.ReactSliderPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.cmcewen.blurview.BlurViewPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import com.corbt.keepawake.KCKeepAwakePackage;
import com.microsoft.codepush.react.CodePush;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.joshuapinter.RNUnifiedContacts.RNUnifiedContactsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.zmxv.RNSound.RNSoundPackage;

import io.lifevision.settings.OpenSettingsPackage;

import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.horcrux.svg.SvgPackage;
import com.facebook.FacebookSdk;
import com.facebook.CallbackManager;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import android.content.Intent;

import java.util.Arrays;
import java.util.List;
import com.BV.LinearGradient.LinearGradientPackage;

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

  @Override
  protected String getJSBundleFile() {
  return CodePush.getJSBundleFile();
  }
    
  @Override
  public boolean getUseDeveloperSupport() {
    return BuildConfig.DEBUG;
  }

  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNDateTimePickerPackage(),
            new RNSentryPackage(),
            // new MoEReactPackage(),
          new RNFirebasePackage(),
          new RNCWebViewPackage(),
          new ReactSliderPackage(),
          new AsyncStoragePackage(),
          new ReactNativeContacts(),
          new KCKeepAwakePackage(),
          new CodePush(BuildConfig.CODEPUSH_KEY, getApplicationContext(), BuildConfig.DEBUG),
          new ReactNativePushNotificationPackage(),
          new ReactVideoPackage(),
          new RNGestureHandlerPackage(),
          new RNUnifiedContactsPackage(),
          new RNSoundPackage(),
          new RNDeviceInfo(),
          new SvgPackage(),
          new FBSDKPackage(mCallbackManager),
          new VectorIconsPackage(),
          new LinearGradientPackage(),
          new BlurViewPackage(),
          new OpenSettingsPackage(),
          new RNFirebaseMessagingPackage()
    );
  }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    // MoEngage moEngage =
    //         new MoEngage.Builder(this, "UZXYFJ0V2RQRUFJTMVHOAJKC")
    //                 .build();
    // MoEngage.initialise(moEngage);
  }

}
