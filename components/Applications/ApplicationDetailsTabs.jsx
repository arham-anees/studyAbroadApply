import React from "react";
import { StyleSheet, Dimensions, FlatList, Animated } from "react-native";
import { Block, theme } from "galio-framework";

const { width } = Dimensions.get("screen");
import argonTheme from "../../constants/Theme";
import GlobalStyle from "../../GlobalStyles";

const defaultMenu = [
  { id: "noticeBoard", title: "Notice Board" },
  { id: "course", title: "Course" },
  { id: "profile", title: "Profile" },
  { id: "documents", title: "Documents" },
  { id: "offers", title: "Offers" },
  { id: "travelInformation", title: "Travel Information" },
];

class ApplicationDetailsTabs extends React.Component {
  static defaultProps = {
    data: defaultMenu,
    initialIndex: null,
  };

  state = {
    active: null,
    loadStatus:false
  };

  componentDidMount() {
    const { initialIndex, loadStatus } = this.props;
    initialIndex && this.selectMenu(initialIndex);
    this.setState({loadStatus});
  }

  animatedValue = new Animated.Value(1);

  animate() {
    this.animatedValue.setValue(0);

    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 300,
      // useNativeDriver: true, // color not supported
    }).start();
  }

  menuRef = React.createRef();

  onScrollToIndexFailed = () => {
    this.menuRef.current.scrollToIndex({
      index: 0,
      viewPosition: 0.5,
    });
  };

  selectMenu = (id) => {
    this.setState({ active: id });

    this.menuRef.current.scrollToIndex({
      index: this.props.data.findIndex((item) => item.id === id),
      viewPosition: 0.5,
    });

    this.animate();
    this.props.onChange && this.props.onChange(id);
  };

  renderItem = (item) => {
    const isActive = this.state.active === item.id;

    const textColor = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        argonTheme.COLORS.BLACK,
        isActive ? argonTheme.COLORS.WHITE : argonTheme.COLORS.BLACK,
      ],
      extrapolate: "clamp",
    });

    const containerStyles = [
      styles.titleContainer,
      !isActive && { backgroundColor: argonTheme.COLORS.SECONDARY },
      isActive && styles.containerShadow,
    ];

    return (
      <Block style={containerStyles}>
        <Animated.Text
          style={[styles.menuTitle, { color: textColor }]}
          onPress={() => this.selectMenu(item.id)}
        >
          {item.title}
        </Animated.Text>
      </Block>
    );
  };

  renderMenu = () => {
    const { data, ...props } = this.props;

    return (
      <FlatList
        {...props}
        data={data}
        horizontal={true}
        ref={this.menuRef}
        extraData={this.state}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={this.onScrollToIndexFailed}
        renderItem={({ item }) => this.renderItem(item)}
        contentContainerStyle={styles.menu}
      />
    );
  };

  render() {
    return <Block style={styles.container}>{this.renderMenu()}</Block>;
  }
}

export default ApplicationDetailsTabs;

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "transparent",
    zIndex: 2,
    height:GlobalStyle.SIZES.NavBarHeight,
    
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
  },
  menu: {
    paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding,
    paddingTop: 8,
    paddingBottom: 16,
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4,
    marginRight: 9,
  },
  containerShadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  menuTitle: {
    fontWeight: "600",
    fontSize: 14,
    // lineHeight: 28,
    paddingVertical: 10,
    paddingHorizontal: 16,
    color: argonTheme.COLORS.MUTED,
  },
});
