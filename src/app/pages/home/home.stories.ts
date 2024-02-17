import type { Meta, StoryObj } from "@storybook/angular";
import { HomeComponent } from "./home.component";

// story meta config
const meta: Meta<HomeComponent> = {
 title: "Home",
 component: HomeComponent
};
export default meta;

// stories
type HomeStory = StoryObj<HomeComponent>;

export const primary: HomeStory = {};
