# Unit Testing with SPFx 1.4.1, SharePoint 2019, React 15

Here you can find tests using the packages Jest and Enzyme for a client side web part with SharePoint Framework 1.4.1, that means: SharePoint 2019!

For tests with SharePoint Online see this topic [here](https://github.com/leberns/sp-hello-events/wiki/Jest-Testing-a-SPFx-Project).

## General Considerations

* By the time of this writing the [information on the community](https://sharepoint.stackexchange.com/questions/260322/spfx-version-support-for-on-premise-server-2019) is that SharePoint 2019 will not support a newer version of the SharePoint Framework, it was shipped and fixed with SharePoint Framework 1.4.1 without beta features.

* SharePoint Framework 1.4.1 supports React 15.6.2 and Office UI Fabric React 5.21.0

* Despite the fact that SharePoint 2019 uses an old version of SharePoint Framework, newer versions of the Yeoman generator can scarfold solutions for SharePoint 2019. Therefore just install the last version of the SPFx and while creating the solution select an option that includes SharePoint 2019.
  * How to start [SharePoint 2019: SharePoint Framework (SPFx) Development](https://social.technet.microsoft.com/wiki/contents/articles/52603.sharepoint-2019-sharepoint-framework-spfx-development.aspx)

* If your solution uses some of the controls from the Office UI Fabric React, like the `DetailsList` then the package **RAF** is needed, otherwise the error happens while running the tests:

[`TypeError: window.requestAnimationFrame is not a function`](https://github.com/One-com/react-truncate/issues/60)

How to configure RAF:

```PowerShell
npm install --save-dev raf
```

And add in `package.json` under the `jest` object the following:

```JSON
  "setupFiles": [
    "raf/polyfill"
  ],
```

* The tests have to select elements on the DOM and then fire events or read properties of the elements to see if the components made the right thing.
  * To make the css selection more reliable it was added manually the CSS class "ibr-spfx-test-sp2019" to the higher element in the React application. Look for this css class at ItemsBrowser.tsx.
  * Look the tests written for the [Office UI Fabric React components](https://github.com/OfficeDev/office-ui-fabric-react/blob/master/packages/office-ui-fabric-react/src/components/). They might help to figure out how to test some specific component like [`TextField`](https://github.com/OfficeDev/office-ui-fabric-react/blob/master/packages/office-ui-fabric-react/src/components/TextField/TextField.test.tsx) ~~or the [`DetailsList`](https://github.com/OfficeDev/office-ui-fabric-react/blob/master/packages/office-ui-fabric-react/src/components/DetailsList/DetailsList.test.tsx)~~ (the tests here do not work for DetailsList, work in progress!).
  * In general it is a good idea to avoid using the HTML property `id`, as pages can contain many instances of the same web part, prefer css classes instead.

### Packages

npm install --save-dev jest@22.4.3
npm install --save-dev @types/jest@22.2.3
npm install --save-dev ts-jest@22.4.5
npm install --save-dev identity-obj-proxy@3.0.0
npm install --save-dev enzyme@3.3.0
npm install --save-dev @types/enzyme@3.1.10
npm install --save-dev enzyme-adapter-react-15@1.0.5
npm install --save-dev react-test-renderer@15.6.2
npm install --save-dev @types/sinon@4.3.1
npm install --save-dev sinon@5.0.7
npm install --save-dev jest-junit@3.7.0
npm install --save-dev raf@^3.4.1

## Commands for this Solution

Please update the paths and eventual URLs according to your system. These commands can be ran with Windows PowerShell.

### Preparing the Solution

```PowerShell
cd C:\Dev\GitHub\leberns
git clone https://github.com/leberns/spfx-tests-sp2019.git
cd C:\Dev\GitHub\leberns\spfx-tests-sp2019
npm install
```

### Building and Running the Solution

```PowerShell
cd C:\Dev\GitHub\leberns\spfx-tests-sp2019
gulp build
gulp serve
```

### Running the Tests

```PowerShell
cd C:\Dev\GitHub\leberns\spfx-tests-sp2019

npm test
```

## Testing Examples and Further Reading

The documentation and a few blog posts around are constantly being updated with the newer version of the software available, but we can just use a previous version of React, Ensyme, Office UI Fabric React, and so on. Therefore, keep this in mind and consider pulling or looking for older versions of example files, if possible.

To find the versions of the packages that are compatible with SPFx 1.4.1 look for the versions at the `package.json` files in your solution or in the solutions on the `node_modules` folder. Ex.:

* "react": "15.6.2",
* "@microsoft/sp-office-ui-fabric-core": "~1.4.0",
* "office-ui-fabric-react": "5.21.0"

- [Test examples from Office UI Fabric React](https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components)
- [Writing tests for Office UI Fabric React components](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Testing)
- [SPFx / React Jest Testing: Examples](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-jest-testing/src/webparts/iceCreamShop/test)
  - In order to see code that works for SPFx 1.4.1 the best is to use the "History" of the files, for example: [`part2EnzymeAdvanced.test.ts`](https://github.com/SharePoint/sp-dev-fx-webparts/blob/e415148bc52fc6bd8d470d2bf831410e89918733/samples/react-jest-testing/src/webparts/iceCreamShop/test/part2EnzymeAdvanced.test.ts)
- [Unit Test your SharePoint Framework solution with Jest](https://blog.velingeorgiev.com/unit-test-your-sharepoint-framework-solution-with-jest)
- [Enzyme cheatsheet](https://devhints.io/enzyme)
