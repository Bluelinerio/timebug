package io.lifevision;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.microsoft.codepush.react.CodePush;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.zmxv.RNSound.RNSoundPackage;
import io.sentry.RNSentryPackage;
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
          new CodePush(BuildConfig.CODEPUSH_KEY, getApplicationContext(), BuildConfig.DEBUG),
          new ReactNativePushNotificationPackage(),
          new ReactVideoPackage(),
          new RNGestureHandlerPackage(),
          new RNSoundPackage(),
          new RNSentryPackage(MainApplication.this),
          new RNDeviceInfo(),
          new SvgPackage(),
          new FBSDKPackage(mCallbackManager),
          new VectorIconsPackage(),
          new LinearGradientPackage()
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
  }

}
