<script>
import { Line } from 'vue3-chart-v2';
import { mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default ({
    mixins: [reactiveProp],
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
        const dates = this.chartData.observations;
        const prices = this.chartData.prices;

        this.renderChart({
            labels: dates,
            datasets: [{
                label: this.label,
                fill: false,
                borderColor: '#7CB8CF',
                tension: 0.1,
                data: prices,
            }]
        },{
        responsive: true
        },
        this.options
        )
    },
})
</script>
