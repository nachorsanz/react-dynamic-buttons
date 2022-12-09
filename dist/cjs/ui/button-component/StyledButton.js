"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const utils_1 = require("../../domain/utils");
const StyledButton = styled_components_1.default.button `
    font-size: 15px;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 500;
    padding: 0.8rem 2rem;
    border: 0px;
    ${(props) => props.textColor &&
    `& {
    color: ${props.textColor};
  }`};
    ${(props) => props.bgColor &&
    `& {
    background-color: ${props.bgColor};
  }`};

    ${(props) => props.hover &&
    `
        background-color: ${(0, utils_1.getVariantProps)(props.hover).backgroundColor};
        color: ${(0, utils_1.getVariantProps)(props.hover).textColor};
        border-radius: ${(0, utils_1.getVariantProps)(props.hover).borderRadius};
        &:hover {
          color: #fff;
          background-color: ${(0, utils_1.getHoverProps)(props.hover).backgroundColor};
  }`};
`;
exports.default = StyledButton;
//# sourceMappingURL=StyledButton.js.map