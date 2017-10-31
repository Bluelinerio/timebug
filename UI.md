# UI Documentation

## TextScreen:
The TextScreen.js is a screen component that present to the user a parallax view to the user. The parallax view is scrollable and have a header with background image and responsive text.

### render function
The render funcion was rewrited to use a common component called `react-native-parallax-scroll-view`. It can be found at https://github.com/i6mi6/react-native-parallax-scroll-view.
The code was standardized to be clear and easy to understand.

```
  render() {
    const { step, goToAssignmentsScreen, color } = this.props;
    const headerHeight = Math.round(screen.height * 0.3);
    const imageUri = getImageUrl(step.icon);

    return (
      <ParallaxScrollView
        contentContainerStyle={{ marginTop: STATUSBAR_HEIGHT }}
        backgroundColor="transparent"
        stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
        parallaxHeaderHeight={ headerHeight }
        backgroundSpeed={100}
        renderBackground={this.renderParallaxBackground}
        renderForeground={this.renderHeader}
    >
      <Content
        subtitle={step.subtitle}
        description={step.description}
        color={color}
        onPress={() => goToAssignmentsScreen({ number: step.number })} />
    </ParallaxScrollView>    
    );
  }
```

### renderHeader function
The renderHeader function is passed as a prop called renderForeground to the ParallaxScrollView component

```
renderHeader = () => {
    const { step, goToAssignmentsScreen, color } = this.props;
    const { icon, title, number } = step;
    const imageUri = getImageUrl(icon);
    const titleFontSize = this.responsiveFontSize(title);
    
    return (
      <View style={styles.headerWrapper}>
        <Nav goBack={goBack} stepNumber={number} />
        <View style={styles.headerDirection}>
          <View style={{width: '40%'}}>
            {this.renderHeaderImg(imageUri)}
          </View>
          <Text
            testID="title"
            style={[styles.textScreenTitle, { width: '60%', fontSize: titleFontSize }]}
          >
            {title} 
          </Text>
        </View> 
      </View>
    )
  }
```

### responsiveFontSize function
React has several issues with responsive text for ios android platforms. To present a better behavior to the users was necessary to create a function that change the text font size based on the text length.

```
  responsiveFontSize = (title)=> {
    const size = title.length || 0;
    if (size < 40) {
      return 32
    } else if (size < 50 && size > 40) {
      return 20
    } else {
      return 20
    }
  }
```
As good practice I've remove all render logic and extract to functions that are easier to maintain.