<script>
import { Line } from 'vue3-chart-v2'

export default ({
    extends: Line,
    props: {
        label: {
            type: String,
        },
        chartData: {
            type: Object,
        },
        options: {
            type: Object
        }
    },
    mounted() {
        // const dates = this.chartData.map(d => d.date.reverse());
        // const totals = this.chartData.map(d => d.total.reverse());
        const dates = this.chartData.datki;
        console.log('🚀 ~ mounted ~ dates', dates)
        const totals = this.chartData.totals;
        console.log('🚀 ~ mounted ~ totals', totals)

        this.renderChart({
            labels: dates,
            datasets: [{
                label: this.label,
                data: totals,
            }]
        },
        this.options
        )
    }
})
</script>
