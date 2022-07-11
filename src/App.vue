<template>
  <pre>
   isLoading: {{ isLoading }}
  </pre>
  <pre>
   isFetching: {{ isFetching }}
  </pre>
  <pre>
   isError: {{ isError }}
  </pre>
  <pre>
   error: {{ error }}
  </pre>
  <pre>
   data: {{ data }}
  </pre>
</template>

<script>
import {useQueryProvider} from "vue-query";

import usePostApi from "@/composables/usePostApi";

export default {
  name: 'App',
  setup() {
    useQueryProvider();
    const {isLoading, isError, data, error, isFetching} = usePostApi();

    return {
      isLoading,
      isError,
      data,
      error,
      isFetching,
    };
  },
};
</script>
