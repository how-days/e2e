import type {
  FullConfig,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from '@playwright/test/reporter';

class CustomReporter implements Reporter {
  public iteration = 1;
  public allTests = 0;

  onBegin(_config: FullConfig, suite: Suite) {
    const testsLenght = suite.allTests().length;
    this.allTests = testsLenght;
  }

  onTestEnd(test: TestCase, result: TestResult) {
    const iteration = `\u001b[35m${this.iteration}/${this.allTests}\u001b[0m`;

    switch (result.status) {
      case 'passed': {
        const seconds = `\u001b[33m(${(result.duration / 1000).toFixed(2)} seconds)\u001b[0`;
        console.log(`${iteration} \u001b[32m${test.parent.title}\u001b[0m ${seconds}`);
        break;
      }
      case 'failed': {
        const errorStack = `\n\t${result.errors[1]?.stack}`;
        console.log(`${iteration} \u001b[31m${test.parent.title}\u001b[0m ${errorStack}`);
        break;
      }
      case 'skipped':
      case 'interrupted':
      case 'timedOut': {
        const errorStack = `\n\t${result.errors[1]?.stack}`;
        console.log(`${iteration} \u001b[34m${test.parent.title}\u001b[0m ${errorStack}`);
        break;
      }
      default:
        console.log('Unknown result.status type');
    }

    this.iteration++;
  }
}

export default CustomReporter;
